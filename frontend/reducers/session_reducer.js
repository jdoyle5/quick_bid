import merge from 'lodash/merge';

// import {
//   RECEIVE_ITEMS,
//   RECEIVE_ITEM
// } from '../actions/item_actions';

const sessionReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    default:
      return state;
  }
};

export default sessionReducer;
