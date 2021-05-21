const a = [1, 2, 3, 4];
const b = a.concat ();
const c = a.concat (5, [6, 7]);
test ('', () => {
  expect (a).toEqual ([1, 2, 3, 4]);
  expect (b).toEqual ([1, 2, 3, 4]);
  expect (c).toEqual ([1, 2, 3, 4, 5, 6, 7]);
});
