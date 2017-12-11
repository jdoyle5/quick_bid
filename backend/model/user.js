var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true
  }
  // sessionToken: String,
  // passwordDigest: String
});

mongoose.model('User', userSchema);
