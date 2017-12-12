import Item from '../models/item';
// import moment from 'moment';

export const index = (req, res, next) => {
  Item.find().lean().exec((err, items) => res.json(
    { items }
  ));
};
