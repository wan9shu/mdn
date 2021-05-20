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
test ('', () => {
  expect (Object.entries (a)).toEqual ([['z', undefined], ['u', 'u']]);
});
