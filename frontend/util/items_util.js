export const fetchItems = () => {
  return fetch('https://quick-bid.herokuapp.com/v1/items.json')
    .then(response => (
      JSON.parse(response._bodyText)
    )
  );
};
