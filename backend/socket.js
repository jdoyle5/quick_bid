import {bidTime} from './util/datetime';
import { auctionItem } from './controllers/items';
import Item from './models/item';
// import { increaseBid } from './controllers/auctions';

export const _getAuctionItem = (socket) => {
  Item.findOne({bid_time: bidTime()}).exec((err, item) => {
    if (item) {
      socket.emit('auction item', item);
      console.log(item);
    }
    return item;
  });
};

export const increaseBid = (userKey, bidAmount, socket) => {
  console.log("executed");
  Item.findOneAndUpdate({bid_time: bidTime()}, {
    "$set": {
      "highest_bid": bidAmount,
      "highest_bidder_key": userKey
    }
  }, {new: true}
).exec((err, item) => {
    socket.emit('auction item', item);
    console.log("here's new item");
    console.log(item);
    if (err) {
      console.log(err);
    }
  });
};
