import mongoose, { Schema } from 'mongoose';

// Define user schema
var userSchema = new Schema({
  id: {
    type: String,
    unique: true,
  },
  name: String,
});

// Export Mongoose model
export default mongoose.model('user', userSchema);
