const v = Symbol('v')
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
    [v]:{
      enumerable:false,
      value:'v'
    }
  }
);
console.log (Reflect.ownKeys (a));
