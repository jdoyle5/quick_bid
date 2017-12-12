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
  bid_time: String,
  highest_bid: Number,
  highest_bidder: Number
});

// Export Mongoose model
export default mongoose.model('item', itemSchema);
