class JSBI extends Array {
  constructor(length) {
    super(length);

    Object.setPrototypeOf(this, JSBI.prototype); // 因为是
    // 相当于 this.__proto__ = JSBI.prototype
  }

  say() {
    console.log(1);
  }
}

const a = new JSBI(10);

a.say()
a.concat(12)
console.log(a.length)

