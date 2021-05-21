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
let b = Object.getOwnPropertyDescriptors (a);
console.log (b);
console.log (Object.keys (b));
console.log (Object.getOwnPropertyDescriptors ([0, 1, 2, 3, 4]));
