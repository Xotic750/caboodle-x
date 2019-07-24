/**
 * @file A big counter.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module BigCounter
 */

import _defineProperties from './.internal/_defineProperties';
import _slice from './.internal/_slice';
import _reverse from './.internal/_reverse';
import _join from './.internal/_join';

const {floor} = Math;
/**
 * Incremental integer counter. Counts from `0` to very big intergers.
 * Javascript´s number type allows you to count in integer steps
 * from `0` to `9007199254740991`. As of ES5, Strings can contain
 * approximately 65000 characters and ES6 is supposed to handle
 * the `MAX_SAFE_INTEGER` (though I don´t believe any environments supports
 * this). This counter represents integer values as strings and can therefore
 * count in integer steps from `0` to the maximum string length (that´s some
 * 65000 digits). In the lower range, upto `9007199254740991`, the strings can
 * be converted to safe Javascript integers `Number(value)` or `+value`. This
 * counter is great for any applications that need a really big count
 * represented as a string, (an ID string).
 *
 * @class
 * @example
 * var BigCounter = require('big-counter-x');
 * var counter = new BigCounter();
 *
 * counter.get(); // '0'
 * counter.next(); // counter object
 * counter.get(); // '1'
 *
 * // Methods are chainable.
 * counter.next().next(); // counter object
 * counter.get(); // '3'
 *
 * counter.reset(); // counter object
 * counter.get(); // '0'
 * counter.toString(); // '0'
 * counter.valueOf(); // '0'
 * counter.toJSON(); // '0'
 *
 * // Values upto `9007199254740991` convert to numbers.
 * Number(counter); // 0
 * +counter; // 0
 */
export default function BigCounter() {
  if (!this || !(this instanceof BigCounter)) {
    throw new TypeError('Constructor BigCounter requires "new"');
  }

  _defineProperties(this, {
    count: {
      value: [0],
    },
  });
}

/**
 * Serialise the counter´s current value.
 *
 * @private
 * @this BigCounter
 * @returns {string} A string representation of an integer.
 */
const counterToString = function _counterToString() {
  return _join(_reverse(_slice(this.count)), '');
};

_defineProperties(BigCounter.prototype, {
  /**
   * Gets the counter´s current value.
   *
   * @function
   * @returns {string} A string representation of an integer.
   */
  get: {
    value: counterToString,
  },
  /**
   * Increments the counter´s value by `1`.
   *
   * @function
   * @returns {Object} The counter object.
   */
  next: {
    value: function next() {
      const clone = _slice(this.count);
      this.count.length = 0;
      const howMany = clone.length;
      let carry = 0;
      let index = 0;
      while (index < howMany || carry) {
        const zi = carry + (clone[index] || 0) + (index === 0);
        this.count[this.count.length] = zi % 10;
        carry = floor(zi / 10);
        index += 1;
      }

      return this;
    },
  },
  /**
   * Resets the counter back to `0`.
   *
   * @function
   * @returns {Object} The counter object.
   */
  reset: {
    value: function reset() {
      this.count.length = 1;
      this.count[0] = 0;
      return this;
    },
  },
  /**
   * Gets the counter´s current value.
   *
   * @function
   * @returns {string} A string representation of an integer.
   */
  toJSON: {
    value: counterToString,
  },
  /**
   * Gets the counter´s current value.
   *
   * @function
   * @returns {string} A string representation of an integer.
   */
  toString: {
    value: counterToString,
  },
  /**
   * Gets the counter´s current value.
   *
   * @function
   * @returns {string} A string representation of an integer.
   */
  valueOf: {
    value: counterToString,
  },
});
