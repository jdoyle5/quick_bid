import express from 'express';
import passport from 'passport';
import FacebookStrategy from 'passport-facebook';
import GoogleStrategy from 'passport-google-oauth20';
// Import Facebook and Google OAuth apps configs
import { facebook, google } from './config';
import morgan from 'morgan';
import mongoose from 'mongoose';
import router from './router';

import {bidTime} from './util/datetime';
import { auctionItem } from './controllers/items';
import Item from './models/item';

// Initialize http server
const app = express();

//Socket.io

var server = require('http').Server(app);
var io = require('socket.io')(server);

// Launch the server on the port 3000

const port = process.env.PORT || 3000;
server.listen(port, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});

var clients = {};

io.on('connection', function(socket) {
  // console.log('Client connected on', socket.id);
  console.log('Connected!');
  clients[socket.id] = socket;
  socket.on('Client connected!', () => {
    console.log('Socket connection working on', socket.id);
    _getAuctionItem(socket);
  });
  socket.on('disconnect', () => console.log('Disconnected'));
  socket.emit('connected');
});

const _getAuctionItem = (socket) => {
  var item = Item.findOne({bid_time: bidTime()}).exec((err, item) => {
    if (item) {
      socket.emit('auction item', item);
      console.log(item);
    };
  })
};

//MongoDB

// Connect to MongoDB
mongoose.connect('mongodb://localhost/items');
// Logger that outputs all requests into the console
app.use(morgan('combined'));

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
  profile
});

// Transform Google profile into user object
const transformGoogleProfile = (profile) => ({
  name: profile.displayName,
  // avatar: profile.image.url
  id: profile.id
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
