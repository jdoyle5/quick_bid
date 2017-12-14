import Item from '../models/item';
import {bidTime} from '../util/datetime';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/items', {
  useMongoClient: true
});


// export const increaseBid = (userKey, bidAmount) => {
//   console.log("executed");
//   Item.findOneAndUpdate({bid_time: bidTime()}, {
//     "$set": {
//       "highest_bid": bidAmount,
//       "highest_bidder_key": userKey
//     }
//   }).exec((err) => {
//     if (err) {
//       console.log(err);
//     }
//   });

  // Item.findOne({
  //   bid_time: bidTime()
  // }).lean().exec((err, item) => {
  //   if (item) {
  //     item.highest_bid = bidAmount;
  //     item.highest_bidder_key = userKey;
  //     item.save();
    // } else {
  //     console.log("item not found");
  //   }
  // });

// };

// increaseBid("111079933685151082118", 400);
// console.log("reached");
