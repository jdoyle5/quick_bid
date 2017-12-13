export const RECEIVE_ITEMS = "RECEIVE_ITEMS";
export const RECEIVE_ITEM = "RECEIVE_ITEM";
import * as APIUtil from '../util/items_util';

export const receiveItems = items => ({
  type: RECEIVE_ITEMS,
  items
});

export const requestItems = () => dispatch => (
  APIUtil.fetchItems().then(items => dispatch(receiveItems(items)))
);
