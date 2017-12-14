import { combineReducers } from 'redux';

import items from './items_reducer';
import auction from './auction_reducer';

export default combineReducers  ({
  items,
  auction
});
