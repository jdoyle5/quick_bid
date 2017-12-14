import merge from 'lodash/merge';

import {
  RECEIVE_AUCTION_ITEM
} from '../actions/auction_actions';

const auctionReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_AUCTION_ITEM:
      return action.item;
    default:
      return state;
  }
};

export default auctionReducer;
