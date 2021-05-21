let a = parseInt ('11', 2);
let aa = parseInt ('124', 2);
let aaa = parseInt ('224', 2);

let b = parseInt ('255', 10);
let bb = parseInt ('255a', 10);
let bbb = parseInt ('a255a', 10);

let c = parseInt ('1', 16);
let cc = parseInt ('11', 16);
let ccc = parseInt ('0x11', 16);

let d = parseInt ('0x11');
let dd = parseInt ('011');
let ddd = parseInt ('11');

let e = parseInt ('111', 1);
let ee = parseInt ('111', 37);
let eee = parseInt ('111', 10.5);
let eeee = parseInt ('111', 'aaaa');

test ('', () => {
  expect (a).toBe (3);
  expect (aa).toBe (1);
  expect (aaa).toBe (NaN);
  expect (b).toBe (255);
  expect (bb).toBe (255);
  expect (bbb).toBe (NaN);
  expect (c).toBe (1);
  expect (cc).toBe (17);
  expect (ccc).toBe (17);
  expect (d).toBe (17);
  expect (dd).toBe (11);
  expect (ddd).toBe (11);
  expect (e).toBe (NaN);
  expect (ee).toBe (NaN);
  expect (eee).toBe (111);
  expect (eeee).toBe (111);
});
