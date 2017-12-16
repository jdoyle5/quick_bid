import express from 'express';
import passport from 'passport';
import FacebookStrategy from 'passport-facebook';
import GoogleStrategy from 'passport-google-oauth20';
// Import Facebook and Google OAuth apps configs
import { facebook, google } from './config';
import morgan from 'morgan';
import mongoose from 'mongoose';
import router from './router';
import { _getAuctionItem, increaseBid } from './socket';

import {bidTime} from './util/datetime';
import { auctionItem } from './controllers/items';
import Item from './models/item';
import { seedData } from './populate';

// Initialize http server
export const app = express();

//Socket.io
//
var server = require('http').Server(app);
export var io = require('socket.io')(server);
var bodyParser = require('body-parser');

// Launch the server on the port 3000

export const port = process.env.PORT || 3000;
server.listen(port, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});
//
var clients = {};
var currentAuctionItem;
//
io.on('connection', function(socket) {
  console.log('Connected!');
  clients[socket.id] = socket;
  socket.on('Client connected!', () => {
    console.log('Socket connection working on', socket.id);
    currentAuctionItem = _getAuctionItem(socket);
  });
  socket.on('Increase bid', (currentUserKey, bidAmount, auctionItemId) => {
    increaseBid(currentUserKey, bidAmount, auctionItemId, socket);
  });
  socket.on('disconnect', () => console.log('Disconnected'));
  socket.emit('connected');
  var nextTick = function() {
    return 60000 - (new Date().getTime() % 60000);
  }, timerFunction = function() {
    _getAuctionItem(socket);
    // console.log(new Date());
    setTimeout(timerFunction, nextTick());
  };

  var timeout = setTimeout(timerFunction, nextTick());
});



//MongoDB

// Connect to MongoDB
mongoose.connect('mongodb://localhost/items', {
  useMongoClient: true
});

//add Data setInterval
seedData();

const dataInterval = 1.14 * Math.pow(10, 6);
setInterval(seedData, dataInterval);


// Logger that outputs all requests into the console
app.use(morgan('combined'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.json());

// Use v1 as prefix for all API endpoints
app.use('/v1', router);


// Handle / route
app.get('/', (req, res) =>
res.send('Hello World!')
)


//OAuth

// Transform Facebook profile because Facebook and Google profile objects look different
// and we want to transform them into user objects that have the same set of attributes
const transformFacebookProfile = (profile) => ({
  name: profile.name,
  avatar: profile.picture.data.url,
  key: profile.id
});

// Transform Google profile into user object
const transformGoogleProfile = (profile) => ({
  name: profile.displayName,
  avatar: profile.image.url,
  key: profile.id
});

// Register Facebook Passport strategy
passport.use(new FacebookStrategy(facebook,
  // Gets called when user authorizes access to their profile
  async (accessToken, refreshToken, profile, done)
    // Return done callback and pass transformed user object
    => done(null, transformFacebookProfile(profile._json))
));

// Register Google Passport strategy
passport.use(new GoogleStrategy(google,
  async (accessToken, refreshToken, profile, done)
    => done(null, transformGoogleProfile(profile._json))
));

// Serialize user into the sessions
passport.serializeUser((user, done) => done(null, user));

// Deserialize user from the sessions
passport.deserializeUser((user, done) => done(null, user));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Set up Facebook auth routes
app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/auth/facebook' }),
  // Redirect user back to the mobile app using Linking with a custom protocol OAuthLogin
  (req, res) => res.redirect('OAuthLogin://login?user=' + JSON.stringify(req.user)));

// Set up Google auth routes
app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/auth/google' }),
  (req, res) => res.redirect('OAuthLogin://login?user=' + JSON.stringify(req.user)));
