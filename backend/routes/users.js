// var express = require('express');
import express from 'express';
var router = express.Router(),
    mongoose = require('mongoose'), //mongo connection
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.use(bodyParser.urlencoded({ extended: true }));
router.use(methodOverride(function(req, res){
      if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method;
        delete req.body._method;
        return method;
      }
}));

////////////////////POST NEW USER////////////////////////
//build the REST operations at the base for blobs
//this will be accessible from http://127.0.0.1:3000/blobs if the default route for / is left unchanged
router.route('/')
  //POST a new blob
  .post(function(req, res) {
    // Get values from POST request. These can be done through forms or REST calls. These rely on the "name" attributes for forms
    var username = req.body.name;
    var email = req.body.email;
    //call the create function for our database
    mongoose.model('User').create({
      username : username,
      email : email,
    }, function (err, user) {
      if (err) {
        res.send("There was a problem adding the information to the database.");
      } else {
        //Blob has been created
        console.log('POST creating new blob: ' + user);
        res.format({
          //JSON response will show the newly created blob
          json: function(){
            res.json(user);
          }
        });
      }
    });
  });
//////////////////////////////////////////////////////////

///////////////////HANDLE ERRORS//////////////////////////
// route middleware to validate :id
router.param('id', function(req, res, next, id) {
  //console.log('validating ' + id + ' exists');
  //find the ID in the Database
  mongoose.model('User').findById(id, function (err, blob) {
    //if it isn't found, we are going to repond with 404
    if (err) {
      console.log(id + ' was not found');
      res.status(404);
      var err = new Error('Not Found');
      err.status = 404;
      res.format({
        html: function(){
            next(err);
        },
        json: function(){
               res.json({message : err.status  + ' ' + err});
        }
      });
  //if it is found we continue on
  } else {
      //uncomment this next line if you want to see every JSON document response for every GET/PUT/DELETE call
      //console.log(blob);
      // once validation is done save the new item in the req
      req.id = id;
      // go to the next thing
      next();
    }
  });
});
//////////////////////////////////////////////////////////



module.exports = router;
