const a = '1111';
const b = parseInt (a, 2);
const c = 1.5;

test ('', () => {
  expect (b.toString (2)).toBe ('1111');
  expect (c.toString (2)).toBe ('1.1');
});
