import {bidTime} from './util/datetime';
import { auctionItem } from './controllers/items';
import Item from './models/item';

export const _getAuctionItem = (socket) => {
  Item.findOne({bid_time: bidTime()}).exec((err, item) => {
    if (item) {
      socket.emit('auction item', item);
      console.log(item);
    }
    return item;
  });
};
