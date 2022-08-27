class JSBI extends Array {
  constructor(length) {
    super(length);

    Object.setPrototypeOf(this, JSBI.prototype); // 
    // 相当于 this.__proto__ = JSBI.prototype
    // 因为是拓展原生Array，避免浏览器兼容性问题，强制指明 this.__proto__ = JSBI.prototype
  }

  say() {
    console.log(1);
  }
}

const a = new JSBI(10);
console.log(a.__proto__)
console.log(a.__proto__.say)

a.say()
a.concat(12)
console.log(a.length)

