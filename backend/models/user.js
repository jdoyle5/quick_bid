import mongoose, { Schema } from 'mongoose';

// Define user schema
var userSchema = new Schema({
  key: {
    type: String,
  },
  name: String,
  avatar: String
});

// Export Mongoose model
export default mongoose.model('user', userSchema);
