export const postUser = (user) => {
  fetch('https://quick-bid.herokuapp.com/v1/users', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(
      user
    )
  });
};
