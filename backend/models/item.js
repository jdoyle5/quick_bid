import mongoose, { Schema } from 'mongoose';

// Define item schema
var itemSchema = new Schema({
  title: String,
  description: String,
  img_url: String,
  categoryId: Number,
  msrp: Number,
  bid_time: Date,
  highest_bid: Number,
  highest_bidder_key: String
});

// Export Mongoose model
export default mongoose.model('item', itemSchema);
