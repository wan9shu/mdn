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

console.log (a, aa, aaa);
console.log (b, bb, bbb);
console.log (c, cc, ccc);
console.log (d, dd, ddd);
console.log (e, ee, eee, eeee);
