const a = ['1', '2', '3'];
const b = a.join ();
test ('', () => {
  expect (b).toBe ('1,2,3');
});
