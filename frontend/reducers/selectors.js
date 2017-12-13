import values from 'lodash/values';

export const selectItems = state => {
  let items = values(state.entities.items);
  return items.map(item => (
    item
  ));
};
