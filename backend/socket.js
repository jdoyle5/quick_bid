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

// export const validItem = (auctionItemId) => {
//   Item.findOne({bid_time: bidTime()}).exec((err, foundItem) => {
//     // console.log(auctionItemId);
//     // console.log(foundItem.id);
//     if (foundItem.id === auctionItemId) {
//       // return true;
//       return foundItem;
//     }
//   });
// };

export const increaseBid = (userKey, bidAmount, auctionItemId, socket) => {
  // console.log("checking bid");
  Item.findOne({bid_time: bidTime()}).exec((err, foundItem) => {
    // console.log(foundItem);
    if (foundItem.id === auctionItemId) {
      Item.findOneAndUpdate({bid_time: bidTime()}, {
        "$set": {
          "highest_bid": bidAmount,
          "highest_bidder_key": userKey
        }
      }, {new: true}
    ).exec((err2, updatedItem) => {
      // console.log("executed bid");
        socket.emit('auction item', updatedItem);
        // console.log(updatedItem);
        if (err2) {
          console.log(err2);
        }
      });
    }

  });

  // if (validItem(auctionItemId)) {
  //   Item.findOneAndUpdate({bid_time: bidTime()}, {
  //     "$set": {
  //       "highest_bid": bidAmount,
  //       "highest_bidder_key": userKey
  //     }
  //   }, {new: true}
  // ).exec((err, item) => {
  //     socket.emit('auction item', item);
  //     console.log("here's new item");
  //     console.log(item);
  //     if (err) {
  //       console.log(err);
  //     }
  //   });
  // } else {
  //   console.log("Item timed out");
  // }

};
