import mongoose, { Schema } from 'mongoose';

// Define item schema
var itemSchema = new Schema({
  title: {
    type: String,
    unique: true,
  },
  img_url: String,
  categoryId: Number,
  msrp: Number,
});

// Export Mongoose model
export default mongoose.model('item', itemSchema);
