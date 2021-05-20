let a = Object.create (
  {x: 'x'},
  {
    y: {
      enumerable: false,
    },
    z: {
      enumerable: true,
    },
    u: {
      enumerable: true,
      value: 'u',
    },
  }
);
test ('a', () => {
  expect (Object.keys (a)).toEqual (['z', 'u']);
});
