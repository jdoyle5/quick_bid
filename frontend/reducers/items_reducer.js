import merge from 'lodash/merge';

import {
  RECEIVE_ITEMS,
  RECEIVE_ITEM
} from '../actions/item_actions';

const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_ITEMS:
      return action.items;
    case RECEIVE_ITEM:
      const newItem = {[action.item.id]: action.item};
      return merge({}, state, newItem);
    default:
      return state;
  }
};

export default itemsReducer;
