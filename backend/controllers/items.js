import Item from '../models/item';
// import moment from 'moment';

import {bidTime} from '../util/datetime';

export const index = (req, res, next) => {
  Item.find().lean().exec((err, items) => res.json(
    { items }
  ));
};

export const auctionItem = (req, res, next) => {
  Item.findOne({
    bid_time: bidTime()
  }).lean().exec((err, item) => res.json(
    { item }
  ));
};
