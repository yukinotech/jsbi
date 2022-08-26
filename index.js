const JSBI = require("./dist/jsbi-cjs");

for (let i = 1000000; i < 1000001; i++) {
  console.log(JSBI.BigInt(String(i)));
}
let a1 = JSBI.BigInt("2");
let a2 = JSBI.BigInt("30");
console.log(a1);
console.log(JSBI.exponentiate(a1, a2));

// console.log(18446744073709551615n + 1n);
// let b = BigInt("18446744073709551615");
// let c = BigInt(2n ** 999999999n - 1n);
// let a = BigInt(2n**222222222n-1n).toString()

// console.log(b === c);

// jsbi 实现原理：

// 
