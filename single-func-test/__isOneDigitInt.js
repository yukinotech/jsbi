const __isOneDigitInt = (x) => {
  return (x & 0x3fffffff) === x;
};

console.log(__isOneDigitInt(2));
console.log(__isOneDigitInt(2.4));
