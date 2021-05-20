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
  expect (forIn (a)).toEqual (['z', 'u', 'x']);
});

function forIn (o) {
  const props = [];
  for (let prop in o) {
    props.push (prop);
  }
  return props;
}
