let a = Object.create (null, {
  x: {
    enumerable: false,
  },
  y: {
    enumerable: true,
    value: 'y',
  },
  z: {
    enumerable: true,
    get () {
      return 'z';
    },
  },
});

test ('', () => {
  expect (Object.assign ({}, a)).toEqual ({
    y: 'y',
    z: 'z',
  });
});
