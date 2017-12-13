const secondOffset = () => (
  new Date(Date.now()).getSeconds() * 1000
);

export const bidTime = () => {
  let t = new Date(Date.now() - secondOffset());
  return new Date(Math.round(t / 10000) * 10000);
};
