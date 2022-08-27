const begin = Date.now();
for (let i = 0; i < 1000000000; i++) {
  let a = 1 << 30;
  a.toString();
}
const end1 = Date.now();
for (let i = 0; i < 1000000000; i++) {
  let a = 1073741824;
  a.toString();
}
const end2 = Date.now();
for (let i = 0; i < 1000000000; i++) {
  let a = Math.pow(2,30);
  a.toString();
}
const end3= Date.now();
console.log(end1 - begin);
console.log(end2 - end1);
console.log(end3 - end2);
// 5168
// 5155
// 5519
// 几乎无差别