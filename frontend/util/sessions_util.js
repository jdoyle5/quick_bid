// export const postUser = (user) => {
//   return fetch('http://localhost:3000/v1/users', {
//     method: 'POST',
//     body: user
//   }).then((response) => {
//     debugger;
//   });
// };

export const postUser = (user) => {
  fetch('http://localhost:3000/v1/users', {
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
