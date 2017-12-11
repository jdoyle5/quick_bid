var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodewebappdb', {
  useMongoClient: true
});
