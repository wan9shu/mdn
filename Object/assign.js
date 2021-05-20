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

console.log (Object.assign ({}, a));
