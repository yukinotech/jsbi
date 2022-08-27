(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.JSBI = factory());
}(this, (function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct.bind();
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  // Copyright 2018 Google Inc.
  //
  // Licensed under the Apache License, Version 2.0 (the “License”);
  // you may not use this file except in compliance with the License.
  // You may obtain a copy of the License at
  // <https://apache.org/licenses/LICENSE-2.0>.
  //
  // Unless required by applicable law or agreed to in writing, software
  // distributed under the License is distributed on an “AS IS” BASIS,
  // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  // See the License for the specific language governing permissions and
  // limitations under the License.
  var JSBI = /*#__PURE__*/function (_Array) {
    _inherits(JSBI, _Array);

    var _super = _createSuper(JSBI);

    function JSBI(length, sign) {
      var _this;

      _classCallCheck(this, JSBI);

      _this = _super.call(this, length);
      _this.sign = sign; // Explicitly set the prototype as per
      // https://github.com/Microsoft/TypeScript-wiki/blob/main/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work

      Object.setPrototypeOf(_assertThisInitialized(_this), JSBI.prototype); // 相当于 this.__proto__ = JSBI.prototype
      // 因为是拓展原生Array，避免浏览器兼容性问题，强制指明 this.__proto__ = JSBI.prototype

      if (length > JSBI.__kMaxLength) {
        throw new RangeError('Maximum BigInt size exceeded');
      }

      return _this;
    }

    _createClass(JSBI, [{
      key: "toDebugString",
      value: function toDebugString() {
        var result = ['BigInt['];

        var _iterator = _createForOfIteratorHelper(this),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var digit = _step.value;
            result.push((digit ? (digit >>> 0).toString(16) : digit) + ', ');
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        result.push(']');
        return result.join('');
      }
    }, {
      key: "toString",
      value: function toString() {
        var radix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

        if (radix < 2 || radix > 36) {
          throw new RangeError('toString() radix argument must be between 2 and 36');
        }

        if (this.length === 0) return '0';

        if ((radix & radix - 1) === 0) {
          return JSBI.__toStringBasePowerOfTwo(this, radix);
        }

        return JSBI.__toStringGeneric(this, radix, false);
      }
    }, {
      key: "valueOf",
      value: function valueOf() {
        throw new Error('Convert JSBI instances to native numbers using `toNumber`.');
      } // Equivalent of "Number(my_bigint)" in the native implementation.
      // TODO: add more tests

    }, {
      key: "__copy",
      value: function __copy() {
        var result = new JSBI(this.length, this.sign);

        for (var i = 0; i < this.length; i++) {
          result[i] = this[i];
        }

        return result;
      }
    }, {
      key: "__trim",
      value: function __trim() {
        var newLength = this.length;
        var last = this[newLength - 1];

        while (last === 0) {
          newLength--;
          last = this[newLength - 1];
          this.pop();
        }

        if (newLength === 0) this.sign = false;
        return this;
      }
    }, {
      key: "__initializeDigits",
      value: function __initializeDigits() {
        for (var i = 0; i < this.length; i++) {
          this[i] = 0;
        }
      }
    }, {
      key: "__clzmsd",
      value: function __clzmsd() {
        return JSBI.__clz30(this.__digit(this.length - 1));
      }
    }, {
      key: "__inplaceMultiplyAdd",
      value: function __inplaceMultiplyAdd(multiplier, summand, length) {
        if (length > this.length) length = this.length;
        var mLow = multiplier & 0x7fff;
        var mHigh = multiplier >>> 15;
        var carry = 0;
        var high = summand;

        for (var i = 0; i < length; i++) {
          var d = this.__digit(i);

          var dLow = d & 0x7fff;
          var dHigh = d >>> 15;

          var pLow = JSBI.__imul(dLow, mLow);

          var pMid1 = JSBI.__imul(dLow, mHigh);

          var pMid2 = JSBI.__imul(dHigh, mLow);

          var pHigh = JSBI.__imul(dHigh, mHigh);

          var result = high + pLow + carry;
          carry = result >>> 30;
          result &= 0x3fffffff;
          result += ((pMid1 & 0x7fff) << 15) + ((pMid2 & 0x7fff) << 15);
          carry += result >>> 30;
          high = pHigh + (pMid1 >>> 15) + (pMid2 >>> 15);

          this.__setDigit(i, result & 0x3fffffff);
        }

        if (carry !== 0 || high !== 0) {
          throw new Error('implementation bug');
        }
      }
    }, {
      key: "__inplaceAdd",
      value: // TODO: work on full digits, like __inplaceSub?
      function __inplaceAdd(summand, startIndex, halfDigits) {
        var carry = 0;

        for (var i = 0; i < halfDigits; i++) {
          var sum = this.__halfDigit(startIndex + i) + summand.__halfDigit(i) + carry;
          carry = sum >>> 15;

          this.__setHalfDigit(startIndex + i, sum & 0x7fff);
        }

        return carry;
      }
    }, {
      key: "__inplaceSub",
      value: function __inplaceSub(subtrahend, startIndex, halfDigits) {
        var fullSteps = halfDigits - 1 >>> 1;
        var borrow = 0;

        if (startIndex & 1) {
          // this:   [..][..][..]
          // subtr.:   [..][..]
          startIndex >>= 1;

          var current = this.__digit(startIndex);

          var r0 = current & 0x7fff;
          var i = 0;

          for (; i < fullSteps; i++) {
            var _sub = subtrahend.__digit(i);

            var _r = (current >>> 15) - (_sub & 0x7fff) - borrow;

            borrow = _r >>> 15 & 1;

            this.__setDigit(startIndex + i, (_r & 0x7fff) << 15 | r0 & 0x7fff);

            current = this.__digit(startIndex + i + 1);
            r0 = (current & 0x7fff) - (_sub >>> 15) - borrow;
            borrow = r0 >>> 15 & 1;
          } // Unrolling the last iteration gives a 5% performance benefit!


          var sub = subtrahend.__digit(i);

          var r15 = (current >>> 15) - (sub & 0x7fff) - borrow;
          borrow = r15 >>> 15 & 1;

          this.__setDigit(startIndex + i, (r15 & 0x7fff) << 15 | r0 & 0x7fff);

          var subTop = sub >>> 15;

          if (startIndex + i + 1 >= this.length) {
            throw new RangeError('out of bounds');
          }

          if ((halfDigits & 1) === 0) {
            current = this.__digit(startIndex + i + 1);
            r0 = (current & 0x7fff) - subTop - borrow;
            borrow = r0 >>> 15 & 1;

            this.__setDigit(startIndex + subtrahend.length, current & 0x3fff8000 | r0 & 0x7fff);
          }
        } else {
          startIndex >>= 1;
          var _i = 0;

          for (; _i < subtrahend.length - 1; _i++) {
            var _current2 = this.__digit(startIndex + _i);

            var _sub3 = subtrahend.__digit(_i);

            var _r4 = (_current2 & 0x7fff) - (_sub3 & 0x7fff) - borrow;

            borrow = _r4 >>> 15 & 1;

            var _r5 = (_current2 >>> 15) - (_sub3 >>> 15) - borrow;

            borrow = _r5 >>> 15 & 1;

            this.__setDigit(startIndex + _i, (_r5 & 0x7fff) << 15 | _r4 & 0x7fff);
          }

          var _current = this.__digit(startIndex + _i);

          var _sub2 = subtrahend.__digit(_i);

          var _r2 = (_current & 0x7fff) - (_sub2 & 0x7fff) - borrow;

          borrow = _r2 >>> 15 & 1;
          var _r3 = 0;

          if ((halfDigits & 1) === 0) {
            _r3 = (_current >>> 15) - (_sub2 >>> 15) - borrow;
            borrow = _r3 >>> 15 & 1;
          }

          this.__setDigit(startIndex + _i, (_r3 & 0x7fff) << 15 | _r2 & 0x7fff);
        }

        return borrow;
      }
    }, {
      key: "__inplaceRightShift",
      value: function __inplaceRightShift(shift) {
        if (shift === 0) return;
        var carry = this.__digit(0) >>> shift;
        var last = this.length - 1;

        for (var i = 0; i < last; i++) {
          var d = this.__digit(i + 1);

          this.__setDigit(i, d << 30 - shift & 0x3fffffff | carry);

          carry = d >>> shift;
        }

        this.__setDigit(last, carry);
      }
    }, {
      key: "__digit",
      value: // Digit helpers.
      function __digit(i) {
        return this[i];
      }
    }, {
      key: "__unsignedDigit",
      value: function __unsignedDigit(i) {
        return this[i] >>> 0;
      }
    }, {
      key: "__setDigit",
      value: function __setDigit(i, digit) {
        this[i] = digit | 0;
      }
    }, {
      key: "__setDigitGrow",
      value: function __setDigitGrow(i, digit) {
        this[i] = digit | 0;
      }
    }, {
      key: "__halfDigitLength",
      value: function __halfDigitLength() {
        var len = this.length;
        if (this.__unsignedDigit(len - 1) <= 0x7fff) return len * 2 - 1;
        return len * 2;
      }
    }, {
      key: "__halfDigit",
      value: function __halfDigit(i) {
        return this[i >>> 1] >>> (i & 1) * 15 & 0x7fff;
      }
    }, {
      key: "__setHalfDigit",
      value: function __setHalfDigit(i, value) {
        var digitIndex = i >>> 1;

        var previous = this.__digit(digitIndex);

        var updated = i & 1 ? previous & 0x7fff | value << 15 : previous & 0x3fff8000 | value & 0x7fff;

        this.__setDigit(digitIndex, updated);
      }
    }], [{
      key: "BigInt",
      value: function BigInt(arg) {
        if (typeof arg === 'number') {
          if (arg === 0) return JSBI.__zero();

          if (JSBI.__isOneDigitInt(arg)) {
            if (arg < 0) {
              return JSBI.__oneDigit(-arg, true);
            }

            return JSBI.__oneDigit(arg, false);
          }

          if (!Number.isFinite(arg) || Math.floor(arg) !== arg) {
            throw new RangeError('The number ' + arg + ' cannot be converted to ' + 'BigInt because it is not an integer');
          }

          return JSBI.__fromDouble(arg);
        } else if (typeof arg === 'string') {
          var result = JSBI.__fromString(arg);

          if (result === null) {
            throw new SyntaxError('Cannot convert ' + arg + ' to a BigInt');
          }

          return result;
        } else if (typeof arg === 'boolean') {
          if (arg === true) {
            return JSBI.__oneDigit(1, false);
          }

          return JSBI.__zero();
        } else if (_typeof(arg) === 'object') {
          if (arg.constructor === JSBI) return arg;

          var primitive = JSBI.__toPrimitive(arg);

          return JSBI.BigInt(primitive);
        }

        throw new TypeError('Cannot convert ' + arg + ' to a BigInt');
      }
    }, {
      key: "toNumber",
      value: function toNumber(x) {
        var xLength = x.length;
        if (xLength === 0) return 0;

        if (xLength === 1) {
          var value = x.__unsignedDigit(0);

          return x.sign ? -value : value;
        }

        var xMsd = x.__digit(xLength - 1);

        var msdLeadingZeros = JSBI.__clz30(xMsd);

        var xBitLength = xLength * 30 - msdLeadingZeros;
        if (xBitLength > 1024) return x.sign ? -Infinity : Infinity;
        var exponent = xBitLength - 1;
        var currentDigit = xMsd;
        var digitIndex = xLength - 1;
        var shift = msdLeadingZeros + 3;
        var mantissaHigh = shift === 32 ? 0 : currentDigit << shift;
        mantissaHigh >>>= 12;
        var mantissaHighBitsUnset = shift - 12;
        var mantissaLow = shift >= 12 ? 0 : currentDigit << 20 + shift;
        var mantissaLowBitsUnset = 20 + shift;

        if (mantissaHighBitsUnset > 0 && digitIndex > 0) {
          digitIndex--;
          currentDigit = x.__digit(digitIndex);
          mantissaHigh |= currentDigit >>> 30 - mantissaHighBitsUnset;
          mantissaLow = currentDigit << mantissaHighBitsUnset + 2;
          mantissaLowBitsUnset = mantissaHighBitsUnset + 2;
        }

        while (mantissaLowBitsUnset > 0 && digitIndex > 0) {
          digitIndex--;
          currentDigit = x.__digit(digitIndex);

          if (mantissaLowBitsUnset >= 30) {
            mantissaLow |= currentDigit << mantissaLowBitsUnset - 30;
          } else {
            mantissaLow |= currentDigit >>> 30 - mantissaLowBitsUnset;
          }

          mantissaLowBitsUnset -= 30;
        }

        var rounding = JSBI.__decideRounding(x, mantissaLowBitsUnset, digitIndex, currentDigit);

        if (rounding === 1 || rounding === 0 && (mantissaLow & 1) === 1) {
          mantissaLow = mantissaLow + 1 >>> 0;

          if (mantissaLow === 0) {
            // Incrementing mantissaLow overflowed.
            mantissaHigh++;

            if (mantissaHigh >>> 20 !== 0) {
              // Incrementing mantissaHigh overflowed.
              mantissaHigh = 0;
              exponent++;

              if (exponent > 1023) {
                // Incrementing the exponent overflowed.
                return x.sign ? -Infinity : Infinity;
              }
            }
          }
        }

        var signBit = x.sign ? 1 << 31 : 0;
        exponent = exponent + 0x3ff << 20;
        JSBI.__kBitConversionInts[1] = signBit | exponent | mantissaHigh;
        JSBI.__kBitConversionInts[0] = mantissaLow;
        return JSBI.__kBitConversionDouble[0];
      } // Operations.

    }, {
      key: "unaryMinus",
      value: function unaryMinus(x) {
        if (x.length === 0) return x;

        var result = x.__copy();

        result.sign = !x.sign;
        return result;
      }
    }, {
      key: "bitwiseNot",
      value: function bitwiseNot(x) {
        if (x.sign) {
          // ~(-x) == ~(~(x-1)) == x-1
          return JSBI.__absoluteSubOne(x).__trim();
        } // ~x == -x-1 == -(x+1)


        return JSBI.__absoluteAddOne(x, true);
      }
    }, {
      key: "exponentiate",
      value: function exponentiate(x, y) {
        if (y.sign) {
          throw new RangeError('Exponent must be positive');
        }

        if (y.length === 0) {
          return JSBI.__oneDigit(1, false);
        }

        if (x.length === 0) return x;

        if (x.length === 1 && x.__digit(0) === 1) {
          // (-1) ** even_number == 1.
          if (x.sign && (y.__digit(0) & 1) === 0) {
            return JSBI.unaryMinus(x);
          } // (-1) ** odd_number == -1, 1 ** anything == 1.


          return x;
        } // For all bases >= 2, very large exponents would lead to unrepresentable
        // results.


        if (y.length > 1) throw new RangeError('BigInt too big');

        var expValue = y.__unsignedDigit(0);

        if (expValue === 1) return x;

        if (expValue >= JSBI.__kMaxLengthBits) {
          throw new RangeError('BigInt too big');
        }

        if (x.length === 1 && x.__digit(0) === 2) {
          // Fast path for 2^n.
          var neededDigits = 1 + (expValue / 30 | 0);
          var sign = x.sign && (expValue & 1) !== 0;

          var _result = new JSBI(neededDigits, sign);

          _result.__initializeDigits(); // All bits are zero. Now set the n-th bit.


          var msd = 1 << expValue % 30;

          _result.__setDigit(neededDigits - 1, msd);

          return _result;
        }

        var result = null;
        var runningSquare = x; // This implicitly sets the result's sign correctly.

        if ((expValue & 1) !== 0) result = x;
        expValue >>= 1;

        for (; expValue !== 0; expValue >>= 1) {
          runningSquare = JSBI.multiply(runningSquare, runningSquare);

          if ((expValue & 1) !== 0) {
            if (result === null) {
              result = runningSquare;
            } else {
              result = JSBI.multiply(result, runningSquare);
            }
          }
        } // TODO see if there's a way for tsc to infer this will always happen?


        return result;
      }
    }, {
      key: "multiply",
      value: function multiply(x, y) {
        if (x.length === 0) return x;
        if (y.length === 0) return y;
        var resultLength = x.length + y.length;

        if (x.__clzmsd() + y.__clzmsd() >= 30) {
          resultLength--;
        }

        var result = new JSBI(resultLength, x.sign !== y.sign);

        result.__initializeDigits();

        for (var i = 0; i < x.length; i++) {
          JSBI.__multiplyAccumulate(y, x.__digit(i), result, i);
        }

        return result.__trim();
      }
    }, {
      key: "divide",
      value: function divide(x, y) {
        if (y.length === 0) throw new RangeError('Division by zero');
        if (JSBI.__absoluteCompare(x, y) < 0) return JSBI.__zero();
        var resultSign = x.sign !== y.sign;

        var divisor = y.__unsignedDigit(0);

        var quotient;

        if (y.length === 1 && divisor <= 0x7fff) {
          if (divisor === 1) {
            return resultSign === x.sign ? x : JSBI.unaryMinus(x);
          }

          quotient = JSBI.__absoluteDivSmall(x, divisor, null);
        } else {
          quotient = JSBI.__absoluteDivLarge(x, y, true, false);
        }

        quotient.sign = resultSign;
        return quotient.__trim();
      }
    }, {
      key: "remainder",
      value: function remainder(x, y) {
        if (y.length === 0) throw new RangeError('Division by zero');
        if (JSBI.__absoluteCompare(x, y) < 0) return x;

        var divisor = y.__unsignedDigit(0);

        if (y.length === 1 && divisor <= 0x7fff) {
          if (divisor === 1) return JSBI.__zero();

          var remainderDigit = JSBI.__absoluteModSmall(x, divisor);

          if (remainderDigit === 0) return JSBI.__zero();
          return JSBI.__oneDigit(remainderDigit, x.sign);
        }

        var remainder = JSBI.__absoluteDivLarge(x, y, false, true);

        remainder.sign = x.sign;
        return remainder.__trim();
      }
    }, {
      key: "add",
      value: function add(x, y) {
        var sign = x.sign;

        if (sign === y.sign) {
          // x + y == x + y
          // -x + -y == -(x + y)
          return JSBI.__absoluteAdd(x, y, sign);
        } // x + -y == x - y == -(y - x)
        // -x + y == y - x == -(x - y)


        if (JSBI.__absoluteCompare(x, y) >= 0) {
          return JSBI.__absoluteSub(x, y, sign);
        }

        return JSBI.__absoluteSub(y, x, !sign);
      }
    }, {
      key: "subtract",
      value: function subtract(x, y) {
        var sign = x.sign;

        if (sign !== y.sign) {
          // x - (-y) == x + y
          // (-x) - y == -(x + y)
          return JSBI.__absoluteAdd(x, y, sign);
        } // x - y == -(y - x)
        // (-x) - (-y) == y - x == -(x - y)


        if (JSBI.__absoluteCompare(x, y) >= 0) {
          return JSBI.__absoluteSub(x, y, sign);
        }

        return JSBI.__absoluteSub(y, x, !sign);
      }
    }, {
      key: "leftShift",
      value: function leftShift(x, y) {
        if (y.length === 0 || x.length === 0) return x;
        if (y.sign) return JSBI.__rightShiftByAbsolute(x, y);
        return JSBI.__leftShiftByAbsolute(x, y);
      }
    }, {
      key: "signedRightShift",
      value: function signedRightShift(x, y) {
        if (y.length === 0 || x.length === 0) return x;
        if (y.sign) return JSBI.__leftShiftByAbsolute(x, y);
        return JSBI.__rightShiftByAbsolute(x, y);
      }
    }, {
      key: "unsignedRightShift",
      value: function unsignedRightShift() {
        throw new TypeError('BigInts have no unsigned right shift; use >> instead');
      }
    }, {
      key: "lessThan",
      value: function lessThan(x, y) {
        return JSBI.__compareToBigInt(x, y) < 0;
      }
    }, {
      key: "lessThanOrEqual",
      value: function lessThanOrEqual(x, y) {
        return JSBI.__compareToBigInt(x, y) <= 0;
      }
    }, {
      key: "greaterThan",
      value: function greaterThan(x, y) {
        return JSBI.__compareToBigInt(x, y) > 0;
      }
    }, {
      key: "greaterThanOrEqual",
      value: function greaterThanOrEqual(x, y) {
        return JSBI.__compareToBigInt(x, y) >= 0;
      }
    }, {
      key: "equal",
      value: function equal(x, y) {
        if (x.sign !== y.sign) return false;
        if (x.length !== y.length) return false;

        for (var i = 0; i < x.length; i++) {
          if (x.__digit(i) !== y.__digit(i)) return false;
        }

        return true;
      }
    }, {
      key: "notEqual",
      value: function notEqual(x, y) {
        return !JSBI.equal(x, y);
      }
    }, {
      key: "bitwiseAnd",
      value: function bitwiseAnd(x, y) {
        if (!x.sign && !y.sign) {
          return JSBI.__absoluteAnd(x, y).__trim();
        } else if (x.sign && y.sign) {
          var resultLength = Math.max(x.length, y.length) + 1; // (-x) & (-y) == ~(x-1) & ~(y-1) == ~((x-1) | (y-1))
          // == -(((x-1) | (y-1)) + 1)

          var result = JSBI.__absoluteSubOne(x, resultLength);

          var y1 = JSBI.__absoluteSubOne(y);

          result = JSBI.__absoluteOr(result, y1, result);
          return JSBI.__absoluteAddOne(result, true, result).__trim();
        } // Assume that x is the positive BigInt.


        if (x.sign) {
          var _ref = [y, x];
          x = _ref[0];
          y = _ref[1];
        } // x & (-y) == x & ~(y-1) == x &~ (y-1)


        return JSBI.__absoluteAndNot(x, JSBI.__absoluteSubOne(y)).__trim();
      }
    }, {
      key: "bitwiseXor",
      value: function bitwiseXor(x, y) {
        if (!x.sign && !y.sign) {
          return JSBI.__absoluteXor(x, y).__trim();
        } else if (x.sign && y.sign) {
          // (-x) ^ (-y) == ~(x-1) ^ ~(y-1) == (x-1) ^ (y-1)
          var _resultLength = Math.max(x.length, y.length);

          var _result2 = JSBI.__absoluteSubOne(x, _resultLength);

          var y1 = JSBI.__absoluteSubOne(y);

          return JSBI.__absoluteXor(_result2, y1, _result2).__trim();
        }

        var resultLength = Math.max(x.length, y.length) + 1; // Assume that x is the positive BigInt.

        if (x.sign) {
          var _ref2 = [y, x];
          x = _ref2[0];
          y = _ref2[1];
        } // x ^ (-y) == x ^ ~(y-1) == ~(x ^ (y-1)) == -((x ^ (y-1)) + 1)


        var result = JSBI.__absoluteSubOne(y, resultLength);

        result = JSBI.__absoluteXor(result, x, result);
        return JSBI.__absoluteAddOne(result, true, result).__trim();
      }
    }, {
      key: "bitwiseOr",
      value: function bitwiseOr(x, y) {
        var resultLength = Math.max(x.length, y.length);

        if (!x.sign && !y.sign) {
          return JSBI.__absoluteOr(x, y).__trim();
        } else if (x.sign && y.sign) {
          // (-x) | (-y) == ~(x-1) | ~(y-1) == ~((x-1) & (y-1))
          // == -(((x-1) & (y-1)) + 1)
          var _result3 = JSBI.__absoluteSubOne(x, resultLength);

          var y1 = JSBI.__absoluteSubOne(y);

          _result3 = JSBI.__absoluteAnd(_result3, y1, _result3);
          return JSBI.__absoluteAddOne(_result3, true, _result3).__trim();
        } // Assume that x is the positive BigInt.


        if (x.sign) {
          var _ref3 = [y, x];
          x = _ref3[0];
          y = _ref3[1];
        } // x | (-y) == x | ~(y-1) == ~((y-1) &~ x) == -(((y-1) ~& x) + 1)


        var result = JSBI.__absoluteSubOne(y, resultLength);

        result = JSBI.__absoluteAndNot(result, x, result);
        return JSBI.__absoluteAddOne(result, true, result).__trim();
      }
    }, {
      key: "asIntN",
      value: function asIntN(n, x) {
        if (x.length === 0) return x;
        n = Math.floor(n);

        if (n < 0) {
          throw new RangeError('Invalid value: not (convertible to) a safe integer');
        }

        if (n === 0) return JSBI.__zero(); // If {x} has less than {n} bits, return it directly.

        if (n >= JSBI.__kMaxLengthBits) return x;
        var neededLength = (n + 29) / 30 | 0;
        if (x.length < neededLength) return x;

        var topDigit = x.__unsignedDigit(neededLength - 1);

        var compareDigit = 1 << (n - 1) % 30;
        if (x.length === neededLength && topDigit < compareDigit) return x; // Otherwise truncate and simulate two's complement.

        var hasBit = (topDigit & compareDigit) === compareDigit;
        if (!hasBit) return JSBI.__truncateToNBits(n, x);
        if (!x.sign) return JSBI.__truncateAndSubFromPowerOfTwo(n, x, true);

        if ((topDigit & compareDigit - 1) === 0) {
          for (var i = neededLength - 2; i >= 0; i--) {
            if (x.__digit(i) !== 0) {
              return JSBI.__truncateAndSubFromPowerOfTwo(n, x, false);
            }
          }

          if (x.length === neededLength && topDigit === compareDigit) return x;
          return JSBI.__truncateToNBits(n, x);
        }

        return JSBI.__truncateAndSubFromPowerOfTwo(n, x, false);
      }
    }, {
      key: "asUintN",
      value: function asUintN(n, x) {
        if (x.length === 0) return x;
        n = Math.floor(n);

        if (n < 0) {
          throw new RangeError('Invalid value: not (convertible to) a safe integer');
        }

        if (n === 0) return JSBI.__zero(); // If {x} is negative, simulate two's complement representation.

        if (x.sign) {
          if (n > JSBI.__kMaxLengthBits) {
            throw new RangeError('BigInt too big');
          }

          return JSBI.__truncateAndSubFromPowerOfTwo(n, x, false);
        } // If {x} is positive and has up to {n} bits, return it directly.


        if (n >= JSBI.__kMaxLengthBits) return x;
        var neededLength = (n + 29) / 30 | 0;
        if (x.length < neededLength) return x;
        var bitsInTopDigit = n % 30;

        if (x.length == neededLength) {
          if (bitsInTopDigit === 0) return x;

          var topDigit = x.__digit(neededLength - 1);

          if (topDigit >>> bitsInTopDigit === 0) return x;
        } // Otherwise, truncate.


        return JSBI.__truncateToNBits(n, x);
      } // Operators.

    }, {
      key: "ADD",
      value: function ADD(x, y) {
        x = JSBI.__toPrimitive(x);
        y = JSBI.__toPrimitive(y);

        if (typeof x === 'string') {
          if (typeof y !== 'string') y = y.toString();
          return x + y;
        }

        if (typeof y === 'string') {
          return x.toString() + y;
        }

        x = JSBI.__toNumeric(x);
        y = JSBI.__toNumeric(y);

        if (JSBI.__isBigInt(x) && JSBI.__isBigInt(y)) {
          return JSBI.add(x, y);
        }

        if (typeof x === 'number' && typeof y === 'number') {
          return x + y;
        }

        throw new TypeError('Cannot mix BigInt and other types, use explicit conversions');
      }
    }, {
      key: "LT",
      value: function LT(x, y) {
        return JSBI.__compare(x, y, 0);
      }
    }, {
      key: "LE",
      value: function LE(x, y) {
        return JSBI.__compare(x, y, 1);
      }
    }, {
      key: "GT",
      value: function GT(x, y) {
        return JSBI.__compare(x, y, 2);
      }
    }, {
      key: "GE",
      value: function GE(x, y) {
        return JSBI.__compare(x, y, 3);
      }
    }, {
      key: "EQ",
      value: function EQ(x, y) {
        while (true) {
          if (JSBI.__isBigInt(x)) {
            if (JSBI.__isBigInt(y)) return JSBI.equal(x, y);
            return JSBI.EQ(y, x);
          } else if (typeof x === 'number') {
            if (JSBI.__isBigInt(y)) return JSBI.__equalToNumber(y, x);
            if (_typeof(y) !== 'object') return x == y;
            y = JSBI.__toPrimitive(y);
          } else if (typeof x === 'string') {
            if (JSBI.__isBigInt(y)) {
              x = JSBI.__fromString(x);
              if (x === null) return false;
              return JSBI.equal(x, y);
            }

            if (_typeof(y) !== 'object') return x == y;
            y = JSBI.__toPrimitive(y);
          } else if (typeof x === 'boolean') {
            if (JSBI.__isBigInt(y)) return JSBI.__equalToNumber(y, +x);
            if (_typeof(y) !== 'object') return x == y;
            y = JSBI.__toPrimitive(y);
          } else if (_typeof(x) === 'symbol') {
            if (JSBI.__isBigInt(y)) return false;
            if (_typeof(y) !== 'object') return x == y;
            y = JSBI.__toPrimitive(y);
          } else if (_typeof(x) === 'object') {
            if (_typeof(y) === 'object' && y.constructor !== JSBI) return x == y;
            x = JSBI.__toPrimitive(x);
          } else {
            return x == y;
          }
        }
      }
    }, {
      key: "NE",
      value: function NE(x, y) {
        return !JSBI.EQ(x, y);
      } // DataView-related functionality.

    }, {
      key: "DataViewGetBigInt64",
      value: function DataViewGetBigInt64(dataview, byteOffset) {
        var littleEndian = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        return JSBI.asIntN(64, JSBI.DataViewGetBigUint64(dataview, byteOffset, littleEndian));
      }
    }, {
      key: "DataViewGetBigUint64",
      value: function DataViewGetBigUint64(dataview, byteOffset) {
        var littleEndian = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        var _ref4 = littleEndian ? [4, 0] : [0, 4],
            _ref5 = _slicedToArray(_ref4, 2),
            h = _ref5[0],
            l = _ref5[1];

        var high = dataview.getUint32(byteOffset + h, littleEndian);
        var low = dataview.getUint32(byteOffset + l, littleEndian);
        var result = new JSBI(3, false);

        result.__setDigit(0, low & 0x3fffffff);

        result.__setDigit(1, (high & 0xfffffff) << 2 | low >>> 30);

        result.__setDigit(2, high >>> 28);

        return result.__trim();
      }
    }, {
      key: "DataViewSetBigInt64",
      value: function DataViewSetBigInt64(dataview, byteOffset, value) {
        var littleEndian = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        JSBI.DataViewSetBigUint64(dataview, byteOffset, value, littleEndian);
      }
    }, {
      key: "DataViewSetBigUint64",
      value: function DataViewSetBigUint64(dataview, byteOffset, value) {
        var littleEndian = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        value = JSBI.asUintN(64, value);
        var high = 0;
        var low = 0;

        if (value.length > 0) {
          low = value.__digit(0);

          if (value.length > 1) {
            var d1 = value.__digit(1);

            low = low | d1 << 30;
            high = d1 >>> 2;

            if (value.length > 2) {
              high = high | value.__digit(2) << 28;
            }
          }
        }

        var _ref6 = littleEndian ? [4, 0] : [0, 4],
            _ref7 = _slicedToArray(_ref6, 2),
            h = _ref7[0],
            l = _ref7[1];

        dataview.setUint32(byteOffset + h, high, littleEndian);
        dataview.setUint32(byteOffset + l, low, littleEndian);
      } // Helpers.

    }, {
      key: "__zero",
      value: function __zero() {
        return new JSBI(0, false);
      }
    }, {
      key: "__oneDigit",
      value: function __oneDigit(value, sign) {
        var result = new JSBI(1, sign);

        result.__setDigit(0, value); // length = 1 , this.0 = 实际number的值


        return result;
      }
    }, {
      key: "__decideRounding",
      value: function __decideRounding(x, mantissaBitsUnset, digitIndex, currentDigit) {
        if (mantissaBitsUnset > 0) return -1;
        var topUnconsumedBit;

        if (mantissaBitsUnset < 0) {
          topUnconsumedBit = -mantissaBitsUnset - 1;
        } else {
          // {currentDigit} fit the mantissa exactly; look at the next digit.
          if (digitIndex === 0) return -1;
          digitIndex--;
          currentDigit = x.__digit(digitIndex);
          topUnconsumedBit = 29;
        } // If the most significant remaining bit is 0, round down.


        var mask = 1 << topUnconsumedBit;
        if ((currentDigit & mask) === 0) return -1; // If any other remaining bit is set, round up.

        mask -= 1;
        if ((currentDigit & mask) !== 0) return 1;

        while (digitIndex > 0) {
          digitIndex--;
          if (x.__digit(digitIndex) !== 0) return 1;
        }

        return 0;
      }
    }, {
      key: "__fromDouble",
      value: function __fromDouble(value) {
        var sign = value < 0;
        JSBI.__kBitConversionDouble[0] = value;
        var rawExponent = JSBI.__kBitConversionInts[1] >>> 20 & 0x7ff;
        var exponent = rawExponent - 0x3ff;
        var digits = (exponent / 30 | 0) + 1;
        var result = new JSBI(digits, sign);
        var kHiddenBit = 0x00100000;
        var mantissaHigh = JSBI.__kBitConversionInts[1] & 0xfffff | kHiddenBit;
        var mantissaLow = JSBI.__kBitConversionInts[0];
        var kMantissaHighTopBit = 20; // 0-indexed position of most significant bit in most significant digit.

        var msdTopBit = exponent % 30; // Number of unused bits in the mantissa. We'll keep them shifted to the
        // left (i.e. most significant part).

        var remainingMantissaBits = 0; // Next digit under construction.

        var digit; // First, build the MSD by shifting the mantissa appropriately.

        if (msdTopBit < kMantissaHighTopBit) {
          var shift = kMantissaHighTopBit - msdTopBit;
          remainingMantissaBits = shift + 32;
          digit = mantissaHigh >>> shift;
          mantissaHigh = mantissaHigh << 32 - shift | mantissaLow >>> shift;
          mantissaLow = mantissaLow << 32 - shift;
        } else if (msdTopBit === kMantissaHighTopBit) {
          remainingMantissaBits = 32;
          digit = mantissaHigh;
          mantissaHigh = mantissaLow;
          mantissaLow = 0;
        } else {
          var _shift = msdTopBit - kMantissaHighTopBit;

          remainingMantissaBits = 32 - _shift;
          digit = mantissaHigh << _shift | mantissaLow >>> 32 - _shift;
          mantissaHigh = mantissaLow << _shift;
          mantissaLow = 0;
        }

        result.__setDigit(digits - 1, digit); // Then fill in the rest of the digits.


        for (var digitIndex = digits - 2; digitIndex >= 0; digitIndex--) {
          if (remainingMantissaBits > 0) {
            remainingMantissaBits -= 30;
            digit = mantissaHigh >>> 2;
            mantissaHigh = mantissaHigh << 30 | mantissaLow >>> 2;
            mantissaLow = mantissaLow << 30;
          } else {
            digit = 0;
          }

          result.__setDigit(digitIndex, digit);
        }

        return result.__trim();
      } // 如其名，判断是否是空白符

    }, {
      key: "__isWhitespace",
      value: function __isWhitespace(c) {
        if (c <= 0x0d && c >= 0x09) return true;
        if (c <= 0x9f) return c === 0x20;

        if (c <= 0x01ffff) {
          return c === 0xa0 || c === 0x1680;
        }

        if (c <= 0x02ffff) {
          c &= 0x01ffff;
          return c <= 0x0a || c === 0x28 || c === 0x29 || c === 0x2f || c === 0x5f || c === 0x1000;
        }

        return c === 0xfeff;
      }
    }, {
      key: "__fromString",
      value: function __fromString(string) {
        var radix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var sign = 0;
        var length = string.length;
        var cursor = 0;
        if (cursor === length) return JSBI.__zero();
        var current = string.charCodeAt(cursor); // Skip whitespace.

        while (JSBI.__isWhitespace(current)) {
          if (++cursor === length) return JSBI.__zero();
          current = string.charCodeAt(cursor);
        } // Detect radix.


        if (current === 0x2b) {
          // '+'
          if (++cursor === length) return null;
          current = string.charCodeAt(cursor);
          sign = 1;
        } else if (current === 0x2d) {
          // '-'
          if (++cursor === length) return null;
          current = string.charCodeAt(cursor);
          sign = -1;
        }

        if (radix === 0) {
          radix = 10;

          if (current === 0x30) {
            // '0'
            if (++cursor === length) return JSBI.__zero();
            current = string.charCodeAt(cursor);

            if (current === 0x58 || current === 0x78) {
              // 'X' or 'x'
              radix = 16;
              if (++cursor === length) return null;
              current = string.charCodeAt(cursor);
            } else if (current === 0x4f || current === 0x6f) {
              // 'O' or 'o'
              radix = 8;
              if (++cursor === length) return null;
              current = string.charCodeAt(cursor);
            } else if (current === 0x42 || current === 0x62) {
              // 'B' or 'b'
              radix = 2;
              if (++cursor === length) return null;
              current = string.charCodeAt(cursor);
            }
          }
        } else if (radix === 16) {
          if (current === 0x30) {
            // '0'
            // Allow "0x" prefix.
            if (++cursor === length) return JSBI.__zero();
            current = string.charCodeAt(cursor);

            if (current === 0x58 || current === 0x78) {
              // 'X' or 'x'
              if (++cursor === length) return null;
              current = string.charCodeAt(cursor);
            }
          }
        }

        if (sign !== 0 && radix !== 10) return null; // Skip leading zeros.

        while (current === 0x30) {
          if (++cursor === length) return JSBI.__zero();
          current = string.charCodeAt(cursor);
        } // Allocate result.


        var chars = length - cursor;
        var bitsPerChar = JSBI.__kMaxBitsPerChar[radix];
        var roundup = JSBI.__kBitsPerCharTableMultiplier - 1;
        if (chars > (1 << 30) / bitsPerChar) return null;
        var bitsMin = bitsPerChar * chars + roundup >>> JSBI.__kBitsPerCharTableShift;
        var resultLength = (bitsMin + 29) / 30 | 0;
        var result = new JSBI(resultLength, false); // Parse.

        var limDigit = radix < 10 ? radix : 10;
        var limAlpha = radix > 10 ? radix - 10 : 0;

        if ((radix & radix - 1) === 0) {
          // Power-of-two radix.
          bitsPerChar >>= JSBI.__kBitsPerCharTableShift;
          var parts = [];
          var partsBits = [];
          var done = false;

          do {
            var part = 0;
            var bits = 0;

            while (true) {
              var d = void 0;

              if (current - 48 >>> 0 < limDigit) {
                d = current - 48;
              } else if ((current | 32) - 97 >>> 0 < limAlpha) {
                d = (current | 32) - 87;
              } else {
                done = true;
                break;
              }

              bits += bitsPerChar;
              part = part << bitsPerChar | d;

              if (++cursor === length) {
                done = true;
                break;
              }

              current = string.charCodeAt(cursor);
              if (bits + bitsPerChar > 30) break;
            }

            parts.push(part);
            partsBits.push(bits);
          } while (!done);

          JSBI.__fillFromParts(result, parts, partsBits);
        } else {
          result.__initializeDigits();

          var _done = false;
          var charsSoFar = 0;

          do {
            var _part = 0;
            var multiplier = 1;

            while (true) {
              var _d = void 0;

              if (current - 48 >>> 0 < limDigit) {
                _d = current - 48;
              } else if ((current | 32) - 97 >>> 0 < limAlpha) {
                _d = (current | 32) - 87;
              } else {
                _done = true;
                break;
              }

              var m = multiplier * radix;
              if (m > 0x3fffffff) break;
              multiplier = m;
              _part = _part * radix + _d;
              charsSoFar++;

              if (++cursor === length) {
                _done = true;
                break;
              }

              current = string.charCodeAt(cursor);
            }

            roundup = JSBI.__kBitsPerCharTableMultiplier * 30 - 1;
            var digitsSoFar = (bitsPerChar * charsSoFar + roundup >>> JSBI.__kBitsPerCharTableShift) / 30 | 0;

            result.__inplaceMultiplyAdd(multiplier, _part, digitsSoFar);
          } while (!_done);
        }

        if (cursor !== length) {
          if (!JSBI.__isWhitespace(current)) return null;

          for (cursor++; cursor < length; cursor++) {
            current = string.charCodeAt(cursor);
            if (!JSBI.__isWhitespace(current)) return null;
          }
        } // Get result.


        result.sign = sign === -1;
        return result.__trim();
      }
    }, {
      key: "__fillFromParts",
      value: function __fillFromParts(result, parts, partsBits) {
        var digitIndex = 0;
        var digit = 0;
        var bitsInDigit = 0;

        for (var i = parts.length - 1; i >= 0; i--) {
          var part = parts[i];
          var partBits = partsBits[i];
          digit |= part << bitsInDigit;
          bitsInDigit += partBits;

          if (bitsInDigit === 30) {
            result.__setDigit(digitIndex++, digit);

            bitsInDigit = 0;
            digit = 0;
          } else if (bitsInDigit > 30) {
            result.__setDigit(digitIndex++, digit & 0x3fffffff);

            bitsInDigit -= 30;
            digit = part >>> partBits - bitsInDigit;
          }
        }

        if (digit !== 0) {
          if (digitIndex >= result.length) throw new Error('implementation bug');

          result.__setDigit(digitIndex++, digit);
        }

        for (; digitIndex < result.length; digitIndex++) {
          result.__setDigit(digitIndex, 0);
        }
      }
    }, {
      key: "__toStringBasePowerOfTwo",
      value: function __toStringBasePowerOfTwo(x, radix) {
        var length = x.length;
        var bits = radix - 1;
        bits = (bits >>> 1 & 0x55) + (bits & 0x55);
        bits = (bits >>> 2 & 0x33) + (bits & 0x33);
        bits = (bits >>> 4 & 0x0f) + (bits & 0x0f);
        var bitsPerChar = bits;
        var charMask = radix - 1;

        var msd = x.__digit(length - 1);

        var msdLeadingZeros = JSBI.__clz30(msd);

        var bitLength = length * 30 - msdLeadingZeros;
        var charsRequired = (bitLength + bitsPerChar - 1) / bitsPerChar | 0;
        if (x.sign) charsRequired++;
        if (charsRequired > 1 << 28) throw new Error('string too long');
        var result = new Array(charsRequired);
        var pos = charsRequired - 1;
        var digit = 0;
        var availableBits = 0;

        for (var i = 0; i < length - 1; i++) {
          var newDigit = x.__digit(i);

          var _current3 = (digit | newDigit << availableBits) & charMask;

          result[pos--] = JSBI.__kConversionChars[_current3];
          var consumedBits = bitsPerChar - availableBits;
          digit = newDigit >>> consumedBits;
          availableBits = 30 - consumedBits;

          while (availableBits >= bitsPerChar) {
            result[pos--] = JSBI.__kConversionChars[digit & charMask];
            digit >>>= bitsPerChar;
            availableBits -= bitsPerChar;
          }
        }

        var current = (digit | msd << availableBits) & charMask;
        result[pos--] = JSBI.__kConversionChars[current];
        digit = msd >>> bitsPerChar - availableBits;

        while (digit !== 0) {
          result[pos--] = JSBI.__kConversionChars[digit & charMask];
          digit >>>= bitsPerChar;
        }

        if (x.sign) result[pos--] = '-';
        if (pos !== -1) throw new Error('implementation bug');
        return result.join('');
      }
    }, {
      key: "__toStringGeneric",
      value: function __toStringGeneric(x, radix, isRecursiveCall) {
        var length = x.length;
        if (length === 0) return '';

        if (length === 1) {
          var result = x.__unsignedDigit(0).toString(radix);

          if (isRecursiveCall === false && x.sign) {
            result = '-' + result;
          }

          return result;
        }

        var bitLength = length * 30 - JSBI.__clz30(x.__digit(length - 1));

        var maxBitsPerChar = JSBI.__kMaxBitsPerChar[radix];
        var minBitsPerChar = maxBitsPerChar - 1;
        var charsRequired = bitLength * JSBI.__kBitsPerCharTableMultiplier;
        charsRequired += minBitsPerChar - 1;
        charsRequired = charsRequired / minBitsPerChar | 0;
        var secondHalfChars = charsRequired + 1 >> 1; // Divide-and-conquer: split by a power of {radix} that's approximately
        // the square root of {x}, then recurse.

        var conqueror = JSBI.exponentiate(JSBI.__oneDigit(radix, false), JSBI.__oneDigit(secondHalfChars, false));
        var quotient;
        var secondHalf;

        var divisor = conqueror.__unsignedDigit(0);

        if (conqueror.length === 1 && divisor <= 0x7fff) {
          quotient = new JSBI(x.length, false);

          quotient.__initializeDigits();

          var remainder = 0;

          for (var i = x.length * 2 - 1; i >= 0; i--) {
            var input = remainder << 15 | x.__halfDigit(i);

            quotient.__setHalfDigit(i, input / divisor | 0);

            remainder = input % divisor | 0;
          }

          secondHalf = remainder.toString(radix);
        } else {
          var divisionResult = JSBI.__absoluteDivLarge(x, conqueror, true, true);

          quotient = divisionResult.quotient;

          var _remainder = divisionResult.remainder.__trim();

          secondHalf = JSBI.__toStringGeneric(_remainder, radix, true);
        }

        quotient.__trim();

        var firstHalf = JSBI.__toStringGeneric(quotient, radix, true);

        while (secondHalf.length < secondHalfChars) {
          secondHalf = '0' + secondHalf;
        }

        if (isRecursiveCall === false && x.sign) {
          firstHalf = '-' + firstHalf;
        }

        return firstHalf + secondHalf;
      }
    }, {
      key: "__unequalSign",
      value: function __unequalSign(leftNegative) {
        return leftNegative ? -1 : 1;
      }
    }, {
      key: "__absoluteGreater",
      value: function __absoluteGreater(bothNegative) {
        return bothNegative ? -1 : 1;
      }
    }, {
      key: "__absoluteLess",
      value: function __absoluteLess(bothNegative) {
        return bothNegative ? 1 : -1;
      }
    }, {
      key: "__compareToBigInt",
      value: function __compareToBigInt(x, y) {
        var xSign = x.sign;
        if (xSign !== y.sign) return JSBI.__unequalSign(xSign);

        var result = JSBI.__absoluteCompare(x, y);

        if (result > 0) return JSBI.__absoluteGreater(xSign);
        if (result < 0) return JSBI.__absoluteLess(xSign);
        return 0;
      }
    }, {
      key: "__compareToNumber",
      value: function __compareToNumber(x, y) {
        if (JSBI.__isOneDigitInt(y)) {
          var xSign = x.sign;
          var ySign = y < 0;
          if (xSign !== ySign) return JSBI.__unequalSign(xSign);

          if (x.length === 0) {
            if (ySign) throw new Error('implementation bug');
            return y === 0 ? 0 : -1;
          } // Any multi-digit BigInt is bigger than an int32.


          if (x.length > 1) return JSBI.__absoluteGreater(xSign);
          var yAbs = Math.abs(y);

          var xDigit = x.__unsignedDigit(0);

          if (xDigit > yAbs) return JSBI.__absoluteGreater(xSign);
          if (xDigit < yAbs) return JSBI.__absoluteLess(xSign);
          return 0;
        }

        return JSBI.__compareToDouble(x, y);
      }
    }, {
      key: "__compareToDouble",
      value: function __compareToDouble(x, y) {
        if (y !== y) return y; // NaN.

        if (y === Infinity) return -1;
        if (y === -Infinity) return 1;
        var xSign = x.sign;
        var ySign = y < 0;
        if (xSign !== ySign) return JSBI.__unequalSign(xSign);

        if (y === 0) {
          throw new Error('implementation bug: should be handled elsewhere');
        }

        if (x.length === 0) return -1;
        JSBI.__kBitConversionDouble[0] = y;
        var rawExponent = JSBI.__kBitConversionInts[1] >>> 20 & 0x7ff;

        if (rawExponent === 0x7ff) {
          throw new Error('implementation bug: handled elsewhere');
        }

        var exponent = rawExponent - 0x3ff;

        if (exponent < 0) {
          // The absolute value of y is less than 1. Only 0n has an absolute
          // value smaller than that, but we've already covered that case.
          return JSBI.__absoluteGreater(xSign);
        }

        var xLength = x.length;

        var xMsd = x.__digit(xLength - 1);

        var msdLeadingZeros = JSBI.__clz30(xMsd);

        var xBitLength = xLength * 30 - msdLeadingZeros;
        var yBitLength = exponent + 1;
        if (xBitLength < yBitLength) return JSBI.__absoluteLess(xSign);
        if (xBitLength > yBitLength) return JSBI.__absoluteGreater(xSign); // Same sign, same bit length. Shift mantissa to align with x and compare
        // bit for bit.

        var kHiddenBit = 0x00100000;
        var mantissaHigh = JSBI.__kBitConversionInts[1] & 0xfffff | kHiddenBit;
        var mantissaLow = JSBI.__kBitConversionInts[0];
        var kMantissaHighTopBit = 20;
        var msdTopBit = 29 - msdLeadingZeros;

        if (msdTopBit !== ((xBitLength - 1) % 30 | 0)) {
          throw new Error('implementation bug');
        }

        var compareMantissa; // Shifted chunk of mantissa.

        var remainingMantissaBits = 0; // First, compare most significant digit against beginning of mantissa.

        if (msdTopBit < kMantissaHighTopBit) {
          var shift = kMantissaHighTopBit - msdTopBit;
          remainingMantissaBits = shift + 32;
          compareMantissa = mantissaHigh >>> shift;
          mantissaHigh = mantissaHigh << 32 - shift | mantissaLow >>> shift;
          mantissaLow = mantissaLow << 32 - shift;
        } else if (msdTopBit === kMantissaHighTopBit) {
          remainingMantissaBits = 32;
          compareMantissa = mantissaHigh;
          mantissaHigh = mantissaLow;
          mantissaLow = 0;
        } else {
          var _shift2 = msdTopBit - kMantissaHighTopBit;

          remainingMantissaBits = 32 - _shift2;
          compareMantissa = mantissaHigh << _shift2 | mantissaLow >>> 32 - _shift2;
          mantissaHigh = mantissaLow << _shift2;
          mantissaLow = 0;
        }

        xMsd = xMsd >>> 0;
        compareMantissa = compareMantissa >>> 0;
        if (xMsd > compareMantissa) return JSBI.__absoluteGreater(xSign);
        if (xMsd < compareMantissa) return JSBI.__absoluteLess(xSign); // Then, compare additional digits against remaining mantissa bits.

        for (var digitIndex = xLength - 2; digitIndex >= 0; digitIndex--) {
          if (remainingMantissaBits > 0) {
            remainingMantissaBits -= 30;
            compareMantissa = mantissaHigh >>> 2;
            mantissaHigh = mantissaHigh << 30 | mantissaLow >>> 2;
            mantissaLow = mantissaLow << 30;
          } else {
            compareMantissa = 0;
          }

          var digit = x.__unsignedDigit(digitIndex);

          if (digit > compareMantissa) return JSBI.__absoluteGreater(xSign);
          if (digit < compareMantissa) return JSBI.__absoluteLess(xSign);
        } // Integer parts are equal; check whether {y} has a fractional part.


        if (mantissaHigh !== 0 || mantissaLow !== 0) {
          if (remainingMantissaBits === 0) throw new Error('implementation bug');
          return JSBI.__absoluteLess(xSign);
        }

        return 0;
      }
    }, {
      key: "__equalToNumber",
      value: function __equalToNumber(x, y) {
        if (JSBI.__isOneDigitInt(y)) {
          if (y === 0) return x.length === 0; // Any multi-digit BigInt is bigger than an int32.

          return x.length === 1 && x.sign === y < 0 && x.__unsignedDigit(0) === Math.abs(y);
        }

        return JSBI.__compareToDouble(x, y) === 0;
      } // Comparison operations, chosen such that "op ^ 2" reverses direction:
      // 0 - lessThan
      // 1 - lessThanOrEqual
      // 2 - greaterThan
      // 3 - greaterThanOrEqual

    }, {
      key: "__comparisonResultToBool",
      value: function __comparisonResultToBool(result, op) {
        switch (op) {
          case 0:
            return result < 0;

          case 1:
            return result <= 0;

          case 2:
            return result > 0;

          case 3:
            return result >= 0;
        }
      }
    }, {
      key: "__compare",
      value: function __compare(x, y, op) {
        x = JSBI.__toPrimitive(x);
        y = JSBI.__toPrimitive(y);

        if (typeof x === 'string' && typeof y === 'string') {
          switch (op) {
            case 0:
              return x < y;

            case 1:
              return x <= y;

            case 2:
              return x > y;

            case 3:
              return x >= y;
          }
        }

        if (JSBI.__isBigInt(x) && typeof y === 'string') {
          y = JSBI.__fromString(y);
          if (y === null) return false;
          return JSBI.__comparisonResultToBool(JSBI.__compareToBigInt(x, y), op);
        }

        if (typeof x === 'string' && JSBI.__isBigInt(y)) {
          x = JSBI.__fromString(x);
          if (x === null) return false;
          return JSBI.__comparisonResultToBool(JSBI.__compareToBigInt(x, y), op);
        }

        x = JSBI.__toNumeric(x);
        y = JSBI.__toNumeric(y);

        if (JSBI.__isBigInt(x)) {
          if (JSBI.__isBigInt(y)) {
            return JSBI.__comparisonResultToBool(JSBI.__compareToBigInt(x, y), op);
          }

          if (typeof y !== 'number') throw new Error('implementation bug');
          return JSBI.__comparisonResultToBool(JSBI.__compareToNumber(x, y), op);
        }

        if (typeof x !== 'number') throw new Error('implementation bug');

        if (JSBI.__isBigInt(y)) {
          // Note that "op ^ 2" reverses the op's direction.
          return JSBI.__comparisonResultToBool(JSBI.__compareToNumber(y, x), op ^ 2);
        }

        if (typeof y !== 'number') throw new Error('implementation bug');

        switch (op) {
          case 0:
            return x < y;

          case 1:
            return x <= y;

          case 2:
            return x > y;

          case 3:
            return x >= y;
        }
      }
    }, {
      key: "__absoluteAdd",
      value: function __absoluteAdd(x, y, resultSign) {
        if (x.length < y.length) return JSBI.__absoluteAdd(y, x, resultSign);
        if (x.length === 0) return x;
        if (y.length === 0) return x.sign === resultSign ? x : JSBI.unaryMinus(x);
        var resultLength = x.length;

        if (x.__clzmsd() === 0 || y.length === x.length && y.__clzmsd() === 0) {
          resultLength++;
        }

        var result = new JSBI(resultLength, resultSign);
        var carry = 0;
        var i = 0;

        for (; i < y.length; i++) {
          var r = x.__digit(i) + y.__digit(i) + carry;
          carry = r >>> 30;

          result.__setDigit(i, r & 0x3fffffff);
        }

        for (; i < x.length; i++) {
          var _r6 = x.__digit(i) + carry;

          carry = _r6 >>> 30;

          result.__setDigit(i, _r6 & 0x3fffffff);
        }

        if (i < result.length) {
          result.__setDigit(i, carry);
        }

        return result.__trim();
      }
    }, {
      key: "__absoluteSub",
      value: function __absoluteSub(x, y, resultSign) {
        if (x.length === 0) return x;
        if (y.length === 0) return x.sign === resultSign ? x : JSBI.unaryMinus(x);
        var result = new JSBI(x.length, resultSign);
        var borrow = 0;
        var i = 0;

        for (; i < y.length; i++) {
          var r = x.__digit(i) - y.__digit(i) - borrow;
          borrow = r >>> 30 & 1;

          result.__setDigit(i, r & 0x3fffffff);
        }

        for (; i < x.length; i++) {
          var _r7 = x.__digit(i) - borrow;

          borrow = _r7 >>> 30 & 1;

          result.__setDigit(i, _r7 & 0x3fffffff);
        }

        return result.__trim();
      }
    }, {
      key: "__absoluteAddOne",
      value: function __absoluteAddOne(x, sign) {
        var result = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var inputLength = x.length;

        if (result === null) {
          result = new JSBI(inputLength, sign);
        } else {
          result.sign = sign;
        }

        var carry = 1;

        for (var i = 0; i < inputLength; i++) {
          var r = x.__digit(i) + carry;
          carry = r >>> 30;

          result.__setDigit(i, r & 0x3fffffff);
        }

        if (carry !== 0) {
          result.__setDigitGrow(inputLength, 1);
        }

        return result;
      }
    }, {
      key: "__absoluteSubOne",
      value: function __absoluteSubOne(x, resultLength) {
        var length = x.length;
        resultLength = resultLength || length;
        var result = new JSBI(resultLength, false);
        var borrow = 1;

        for (var i = 0; i < length; i++) {
          var r = x.__digit(i) - borrow;
          borrow = r >>> 30 & 1;

          result.__setDigit(i, r & 0x3fffffff);
        }

        if (borrow !== 0) throw new Error('implementation bug');

        for (var _i2 = length; _i2 < resultLength; _i2++) {
          result.__setDigit(_i2, 0);
        }

        return result;
      }
    }, {
      key: "__absoluteAnd",
      value: function __absoluteAnd(x, y) {
        var result = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var xLength = x.length;
        var yLength = y.length;
        var numPairs = yLength;

        if (xLength < yLength) {
          numPairs = xLength;
          var tmp = x;
          var tmpLength = xLength;
          x = y;
          xLength = yLength;
          y = tmp;
          yLength = tmpLength;
        }

        var resultLength = numPairs;

        if (result === null) {
          result = new JSBI(resultLength, false);
        } else {
          resultLength = result.length;
        }

        var i = 0;

        for (; i < numPairs; i++) {
          result.__setDigit(i, x.__digit(i) & y.__digit(i));
        }

        for (; i < resultLength; i++) {
          result.__setDigit(i, 0);
        }

        return result;
      }
    }, {
      key: "__absoluteAndNot",
      value: function __absoluteAndNot(x, y) {
        var result = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var xLength = x.length;
        var yLength = y.length;
        var numPairs = yLength;

        if (xLength < yLength) {
          numPairs = xLength;
        }

        var resultLength = xLength;

        if (result === null) {
          result = new JSBI(resultLength, false);
        } else {
          resultLength = result.length;
        }

        var i = 0;

        for (; i < numPairs; i++) {
          result.__setDigit(i, x.__digit(i) & ~y.__digit(i));
        }

        for (; i < xLength; i++) {
          result.__setDigit(i, x.__digit(i));
        }

        for (; i < resultLength; i++) {
          result.__setDigit(i, 0);
        }

        return result;
      }
    }, {
      key: "__absoluteOr",
      value: function __absoluteOr(x, y) {
        var result = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var xLength = x.length;
        var yLength = y.length;
        var numPairs = yLength;

        if (xLength < yLength) {
          numPairs = xLength;
          var tmp = x;
          var tmpLength = xLength;
          x = y;
          xLength = yLength;
          y = tmp;
          yLength = tmpLength;
        }

        var resultLength = xLength;

        if (result === null) {
          result = new JSBI(resultLength, false);
        } else {
          resultLength = result.length;
        }

        var i = 0;

        for (; i < numPairs; i++) {
          result.__setDigit(i, x.__digit(i) | y.__digit(i));
        }

        for (; i < xLength; i++) {
          result.__setDigit(i, x.__digit(i));
        }

        for (; i < resultLength; i++) {
          result.__setDigit(i, 0);
        }

        return result;
      }
    }, {
      key: "__absoluteXor",
      value: function __absoluteXor(x, y) {
        var result = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var xLength = x.length;
        var yLength = y.length;
        var numPairs = yLength;

        if (xLength < yLength) {
          numPairs = xLength;
          var tmp = x;
          var tmpLength = xLength;
          x = y;
          xLength = yLength;
          y = tmp;
          yLength = tmpLength;
        }

        var resultLength = xLength;

        if (result === null) {
          result = new JSBI(resultLength, false);
        } else {
          resultLength = result.length;
        }

        var i = 0;

        for (; i < numPairs; i++) {
          result.__setDigit(i, x.__digit(i) ^ y.__digit(i));
        }

        for (; i < xLength; i++) {
          result.__setDigit(i, x.__digit(i));
        }

        for (; i < resultLength; i++) {
          result.__setDigit(i, 0);
        }

        return result;
      }
    }, {
      key: "__absoluteCompare",
      value: function __absoluteCompare(x, y) {
        var diff = x.length - y.length;
        if (diff !== 0) return diff;
        var i = x.length - 1;

        while (i >= 0 && x.__digit(i) === y.__digit(i)) {
          i--;
        }

        if (i < 0) return 0;
        return x.__unsignedDigit(i) > y.__unsignedDigit(i) ? 1 : -1;
      }
    }, {
      key: "__multiplyAccumulate",
      value: function __multiplyAccumulate(multiplicand, multiplier, accumulator, accumulatorIndex) {
        if (multiplier === 0) return;
        var m2Low = multiplier & 0x7fff;
        var m2High = multiplier >>> 15;
        var carry = 0;
        var high = 0;

        for (var i = 0; i < multiplicand.length; i++, accumulatorIndex++) {
          var acc = accumulator.__digit(accumulatorIndex);

          var m1 = multiplicand.__digit(i);

          var m1Low = m1 & 0x7fff;
          var m1High = m1 >>> 15;

          var rLow = JSBI.__imul(m1Low, m2Low);

          var rMid1 = JSBI.__imul(m1Low, m2High);

          var rMid2 = JSBI.__imul(m1High, m2Low);

          var rHigh = JSBI.__imul(m1High, m2High);

          acc += high + rLow + carry;
          carry = acc >>> 30;
          acc &= 0x3fffffff;
          acc += ((rMid1 & 0x7fff) << 15) + ((rMid2 & 0x7fff) << 15);
          carry += acc >>> 30;
          high = rHigh + (rMid1 >>> 15) + (rMid2 >>> 15);

          accumulator.__setDigit(accumulatorIndex, acc & 0x3fffffff);
        }

        for (; carry !== 0 || high !== 0; accumulatorIndex++) {
          var _acc = accumulator.__digit(accumulatorIndex);

          _acc += carry + high;
          high = 0;
          carry = _acc >>> 30;

          accumulator.__setDigit(accumulatorIndex, _acc & 0x3fffffff);
        }
      }
    }, {
      key: "__internalMultiplyAdd",
      value: function __internalMultiplyAdd(source, factor, summand, n, result) {
        var carry = summand;
        var high = 0;

        for (var i = 0; i < n; i++) {
          var digit = source.__digit(i);

          var rx = JSBI.__imul(digit & 0x7fff, factor);

          var ry = JSBI.__imul(digit >>> 15, factor);

          var r = rx + ((ry & 0x7fff) << 15) + high + carry;
          carry = r >>> 30;
          high = ry >>> 15;

          result.__setDigit(i, r & 0x3fffffff);
        }

        if (result.length > n) {
          result.__setDigit(n++, carry + high);

          while (n < result.length) {
            result.__setDigit(n++, 0);
          }
        } else {
          if (carry + high !== 0) throw new Error('implementation bug');
        }
      }
    }, {
      key: "__absoluteDivSmall",
      value: function __absoluteDivSmall(x, divisor) {
        var quotient = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        if (quotient === null) quotient = new JSBI(x.length, false);
        var remainder = 0;

        for (var i = x.length * 2 - 1; i >= 0; i -= 2) {
          var input = (remainder << 15 | x.__halfDigit(i)) >>> 0;
          var upperHalf = input / divisor | 0;
          remainder = input % divisor | 0;
          input = (remainder << 15 | x.__halfDigit(i - 1)) >>> 0;
          var lowerHalf = input / divisor | 0;
          remainder = input % divisor | 0;

          quotient.__setDigit(i >>> 1, upperHalf << 15 | lowerHalf);
        }

        return quotient;
      }
    }, {
      key: "__absoluteModSmall",
      value: function __absoluteModSmall(x, divisor) {
        var remainder = 0;

        for (var i = x.length * 2 - 1; i >= 0; i--) {
          var input = (remainder << 15 | x.__halfDigit(i)) >>> 0;
          remainder = input % divisor | 0;
        }

        return remainder;
      }
    }, {
      key: "__absoluteDivLarge",
      value: function __absoluteDivLarge(dividend, divisor, wantQuotient, wantRemainder) {
        var n = divisor.__halfDigitLength();

        var n2 = divisor.length;
        var m = dividend.__halfDigitLength() - n;
        var q = null;

        if (wantQuotient) {
          q = new JSBI(m + 2 >>> 1, false);

          q.__initializeDigits();
        }

        var qhatv = new JSBI(n + 2 >>> 1, false);

        qhatv.__initializeDigits(); // D1.


        var shift = JSBI.__clz15(divisor.__halfDigit(n - 1));

        if (shift > 0) {
          divisor = JSBI.__specialLeftShift(divisor, shift, 0
          /* add no digits*/
          );
        }

        var u = JSBI.__specialLeftShift(dividend, shift, 1
        /* add one digit */
        ); // D2.


        var vn1 = divisor.__halfDigit(n - 1);

        var halfDigitBuffer = 0;

        for (var j = m; j >= 0; j--) {
          // D3.
          var qhat = 0x7fff;

          var ujn = u.__halfDigit(j + n);

          if (ujn !== vn1) {
            var input = (ujn << 15 | u.__halfDigit(j + n - 1)) >>> 0;
            qhat = input / vn1 | 0;
            var rhat = input % vn1 | 0;

            var vn2 = divisor.__halfDigit(n - 2);

            var ujn2 = u.__halfDigit(j + n - 2);

            while (JSBI.__imul(qhat, vn2) >>> 0 > (rhat << 16 | ujn2) >>> 0) {
              qhat--;
              rhat += vn1;
              if (rhat > 0x7fff) break;
            }
          } // D4.


          JSBI.__internalMultiplyAdd(divisor, qhat, 0, n2, qhatv);

          var c = u.__inplaceSub(qhatv, j, n + 1);

          if (c !== 0) {
            c = u.__inplaceAdd(divisor, j, n);

            u.__setHalfDigit(j + n, u.__halfDigit(j + n) + c & 0x7fff);

            qhat--;
          }

          if (wantQuotient) {
            if (j & 1) {
              halfDigitBuffer = qhat << 15;
            } else {
              // TODO make this statically determinable
              q.__setDigit(j >>> 1, halfDigitBuffer | qhat);
            }
          }
        }

        if (wantRemainder) {
          u.__inplaceRightShift(shift);

          if (wantQuotient) {
            return {
              quotient: q,
              remainder: u
            };
          }

          return u;
        }

        if (wantQuotient) return q; // TODO find a way to make this statically unreachable?

        throw new Error('unreachable');
      }
    }, {
      key: "__clz15",
      value: function __clz15(value) {
        return JSBI.__clz30(value) - 15;
      }
    }, {
      key: "__specialLeftShift",
      value: function __specialLeftShift(x, shift, addDigit) {
        var n = x.length;
        var resultLength = n + addDigit;
        var result = new JSBI(resultLength, false);

        if (shift === 0) {
          for (var i = 0; i < n; i++) {
            result.__setDigit(i, x.__digit(i));
          }

          if (addDigit > 0) result.__setDigit(n, 0);
          return result;
        }

        var carry = 0;

        for (var _i3 = 0; _i3 < n; _i3++) {
          var d = x.__digit(_i3);

          result.__setDigit(_i3, d << shift & 0x3fffffff | carry);

          carry = d >>> 30 - shift;
        }

        if (addDigit > 0) {
          result.__setDigit(n, carry);
        }

        return result;
      }
    }, {
      key: "__leftShiftByAbsolute",
      value: function __leftShiftByAbsolute(x, y) {
        var shift = JSBI.__toShiftAmount(y);

        if (shift < 0) throw new RangeError('BigInt too big');
        var digitShift = shift / 30 | 0;
        var bitsShift = shift % 30;
        var length = x.length;
        var grow = bitsShift !== 0 && x.__digit(length - 1) >>> 30 - bitsShift !== 0;
        var resultLength = length + digitShift + (grow ? 1 : 0);
        var result = new JSBI(resultLength, x.sign);

        if (bitsShift === 0) {
          var i = 0;

          for (; i < digitShift; i++) {
            result.__setDigit(i, 0);
          }

          for (; i < resultLength; i++) {
            result.__setDigit(i, x.__digit(i - digitShift));
          }
        } else {
          var carry = 0;

          for (var _i4 = 0; _i4 < digitShift; _i4++) {
            result.__setDigit(_i4, 0);
          }

          for (var _i5 = 0; _i5 < length; _i5++) {
            var d = x.__digit(_i5);

            result.__setDigit(_i5 + digitShift, d << bitsShift & 0x3fffffff | carry);

            carry = d >>> 30 - bitsShift;
          }

          if (grow) {
            result.__setDigit(length + digitShift, carry);
          } else {
            if (carry !== 0) throw new Error('implementation bug');
          }
        }

        return result.__trim();
      }
    }, {
      key: "__rightShiftByAbsolute",
      value: function __rightShiftByAbsolute(x, y) {
        var length = x.length;
        var sign = x.sign;

        var shift = JSBI.__toShiftAmount(y);

        if (shift < 0) return JSBI.__rightShiftByMaximum(sign);
        var digitShift = shift / 30 | 0;
        var bitsShift = shift % 30;
        var resultLength = length - digitShift;
        if (resultLength <= 0) return JSBI.__rightShiftByMaximum(sign); // For negative numbers, round down if any bit was shifted out (so that
        // e.g. -5n >> 1n == -3n and not -2n). Check now whether this will happen
        // and whether itc an cause overflow into a new digit. If we allocate the
        // result large enough up front, it avoids having to do grow it later.

        var mustRoundDown = false;

        if (sign) {
          var mask = (1 << bitsShift) - 1;

          if ((x.__digit(digitShift) & mask) !== 0) {
            mustRoundDown = true;
          } else {
            for (var i = 0; i < digitShift; i++) {
              if (x.__digit(i) !== 0) {
                mustRoundDown = true;
                break;
              }
            }
          }
        } // If bitsShift is non-zero, it frees up bits, preventing overflow.


        if (mustRoundDown && bitsShift === 0) {
          // Overflow cannot happen if the most significant digit has unset bits.
          var msd = x.__digit(length - 1);

          var roundingCanOverflow = ~msd === 0;
          if (roundingCanOverflow) resultLength++;
        }

        var result = new JSBI(resultLength, sign);

        if (bitsShift === 0) {
          // Zero out any overflow digit (see "roundingCanOverflow" above).
          result.__setDigit(resultLength - 1, 0);

          for (var _i6 = digitShift; _i6 < length; _i6++) {
            result.__setDigit(_i6 - digitShift, x.__digit(_i6));
          }
        } else {
          var carry = x.__digit(digitShift) >>> bitsShift;
          var last = length - digitShift - 1;

          for (var _i7 = 0; _i7 < last; _i7++) {
            var d = x.__digit(_i7 + digitShift + 1);

            result.__setDigit(_i7, d << 30 - bitsShift & 0x3fffffff | carry);

            carry = d >>> bitsShift;
          }

          result.__setDigit(last, carry);
        }

        if (mustRoundDown) {
          // Since the result is negative, rounding down means adding one to its
          // absolute value. This cannot overflow.
          result = JSBI.__absoluteAddOne(result, true, result);
        }

        return result.__trim();
      }
    }, {
      key: "__rightShiftByMaximum",
      value: function __rightShiftByMaximum(sign) {
        if (sign) {
          return JSBI.__oneDigit(1, true);
        }

        return JSBI.__zero();
      }
    }, {
      key: "__toShiftAmount",
      value: function __toShiftAmount(x) {
        if (x.length > 1) return -1;

        var value = x.__unsignedDigit(0);

        if (value > JSBI.__kMaxLengthBits) return -1;
        return value;
      }
    }, {
      key: "__toPrimitive",
      value: function __toPrimitive(obj) {
        var hint = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';
        if (_typeof(obj) !== 'object') return obj;
        if (obj.constructor === JSBI) return obj;

        if (typeof Symbol !== 'undefined' && _typeof(Symbol.toPrimitive) === 'symbol') {
          var exoticToPrim = obj[Symbol.toPrimitive];

          if (exoticToPrim) {
            var primitive = exoticToPrim(hint);
            if (_typeof(primitive) !== 'object') return primitive;
            throw new TypeError('Cannot convert object to primitive value');
          }
        }

        var valueOf = obj.valueOf;

        if (valueOf) {
          var _primitive = valueOf.call(obj);

          if (_typeof(_primitive) !== 'object') return _primitive;
        }

        var toString = obj.toString;

        if (toString) {
          var _primitive2 = toString.call(obj);

          if (_typeof(_primitive2) !== 'object') return _primitive2;
        }

        throw new TypeError('Cannot convert object to primitive value');
      }
    }, {
      key: "__toNumeric",
      value: function __toNumeric(value) {
        if (JSBI.__isBigInt(value)) return value;
        return +value;
      }
    }, {
      key: "__isBigInt",
      value: function __isBigInt(value) {
        return _typeof(value) === 'object' && value !== null && value.constructor === JSBI;
      }
    }, {
      key: "__truncateToNBits",
      value: function __truncateToNBits(n, x) {
        var neededDigits = (n + 29) / 30 | 0;
        var result = new JSBI(neededDigits, x.sign);
        var last = neededDigits - 1;

        for (var i = 0; i < last; i++) {
          result.__setDigit(i, x.__digit(i));
        }

        var msd = x.__digit(last);

        if (n % 30 !== 0) {
          var drop = 32 - n % 30;
          msd = msd << drop >>> drop;
        }

        result.__setDigit(last, msd);

        return result.__trim();
      }
    }, {
      key: "__truncateAndSubFromPowerOfTwo",
      value: function __truncateAndSubFromPowerOfTwo(n, x, resultSign) {
        var neededDigits = (n + 29) / 30 | 0;
        var result = new JSBI(neededDigits, resultSign);
        var i = 0;
        var last = neededDigits - 1;
        var borrow = 0;
        var limit = Math.min(last, x.length);

        for (; i < limit; i++) {
          var r = 0 - x.__digit(i) - borrow;
          borrow = r >>> 30 & 1;

          result.__setDigit(i, r & 0x3fffffff);
        }

        for (; i < last; i++) {
          result.__setDigit(i, -borrow & 0x3fffffff | 0);
        }

        var msd = last < x.length ? x.__digit(last) : 0;
        var msdBitsConsumed = n % 30;
        var resultMsd;

        if (msdBitsConsumed === 0) {
          resultMsd = 0 - msd - borrow;
          resultMsd &= 0x3fffffff;
        } else {
          var drop = 32 - msdBitsConsumed;
          msd = msd << drop >>> drop;
          var minuendMsd = 1 << 32 - drop;
          resultMsd = minuendMsd - msd - borrow;
          resultMsd &= minuendMsd - 1;
        }

        result.__setDigit(last, resultMsd);

        return result.__trim();
      }
    }, {
      key: "__digitPow",
      value: function __digitPow(base, exponent) {
        var result = 1;

        while (exponent > 0) {
          if (exponent & 1) result *= base;
          exponent >>>= 1;
          base *= base;
        }

        return result;
      }
    }, {
      key: "__isOneDigitInt",
      value: function __isOneDigitInt(x) {
        // https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html#sec-numberbitwiseop
        // https://tc39.es/ecma262/multipage/abstract-operations.html#sec-toint32
        // https://juejin.cn/post/6922902969029492743#comment
        // js的位运算，会把不是number类型的转换成number类型，不是整数的浮点数，floor取整整数，并且只取int32部分运算
        // 因此，下面的操作是说：if x不是小于2^32的整数，返回false
        return (x & 0x3fffffff) === x;
      }
    }]);

    return JSBI;
  }( /*#__PURE__*/_wrapNativeSuper(Array));

  JSBI.__kMaxLength = 1 << 25; // 相当于2的25次方

  JSBI.__kMaxLengthBits = JSBI.__kMaxLength << 5; // 相当于2的30次方
  // Lookup table for the maximum number of bits required per character of a
  // base-N string representation of a number. To increase accuracy, the array
  // value is the actual value multiplied by 32. To generate this table:
  //
  // for (let i = 0; i <= 36; i++) {
  //   console.log(Math.ceil(Math.log2(i) * 32) + ',');
  // }

  JSBI.__kMaxBitsPerChar = [0, 0, 32, 51, 64, 75, 83, 90, 96, 102, 107, 111, 115, 119, 122, 126, 128, 131, 134, 136, 139, 141, 143, 145, 147, 149, 151, 153, 154, 156, 158, 159, 160, 162, 163, 165, 166 // 33..36
  ];
  JSBI.__kBitsPerCharTableShift = 5;
  JSBI.__kBitsPerCharTableMultiplier = 1 << JSBI.__kBitsPerCharTableShift;
  JSBI.__kConversionChars = '0123456789abcdefghijklmnopqrstuvwxyz'.split('');
  JSBI.__kBitConversionBuffer = new ArrayBuffer(8);
  JSBI.__kBitConversionDouble = new Float64Array(JSBI.__kBitConversionBuffer);
  JSBI.__kBitConversionInts = new Int32Array(JSBI.__kBitConversionBuffer); // For IE11 compatibility.
  // Note that the custom replacements are tailored for JSBI's needs, and as
  // such are not reusable as general-purpose polyfills.

  JSBI.__clz30 = Math.clz32 ? function (x) {
    return Math.clz32(x) - 2;
  } : function (x) {
    if (x === 0) return 30;
    return 29 - (Math.log(x >>> 0) / Math.LN2 | 0) | 0;
  };

  JSBI.__imul = Math.imul || function (a, b) {
    return a * b | 0;
  };

  return JSBI;

})));
//# sourceMappingURL=jsbi-umd.js.map
