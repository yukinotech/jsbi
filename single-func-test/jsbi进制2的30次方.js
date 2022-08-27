const JSBI = require("../dist/jsbi-cjs");

let a1 = JSBI.BigInt(Math.pow(2, 30) - 1);
let a2 = JSBI.BigInt(Math.pow(2, 30));
let a3 = JSBI.BigInt("1152921504606846976"); // （2n ** 60n）
let a4 = JSBI.BigInt("0x21"); // （2n ** 60n）

console.log(a1, a1.length);
console.log(a2, a2.length);
console.log(a3, a3.length);

// JSBI(1) [ 1073741823, sign: false ] 1
// JSBI(2) [ 0, 1, sign: false ] 2
// JSBI(3) [ 0, 0, 1, sign: false ] 3
// jsbi 采用2^30 进制
