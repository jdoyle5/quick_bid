export const postUser = (user) => {
  return fetch('http://localhost:3000/v1/users', {
    method: 'POST',
    body: user
  }).then(console.log("posted user"));
};
