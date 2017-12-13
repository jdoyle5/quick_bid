
export const fetchItems = () => {
  return fetch('http://localhost:3000/v1/items.json')
    .then(response => (
      JSON.parse(response._bodyText)
    )
  );
};
