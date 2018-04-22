/**
 * @file Shim for Math.sign.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module sign
 */

import toNumber from './toNumber';
import isNumberNaN from './isNumberNaN';

/**
 * This method returns the sign of a number, indicating whether the number is positive,
 * negative or zero.
 *
 * @param {*} x - A number.
 * @returns {number} A number representing the sign of the given argument. If the argument
 * is a positive number, negative number, positive zero or negative zero, the function will
 * return 1, -1, 0 or -0 respectively. Otherwise, NaN is returned.
 * @example
 * var mathSign = require('math-sign-x').sign2018;
 *
 * mathSign(3);     //  1
 * mathSign(-3);    // -1
 * mathSign('-3');  // -1
 * mathSign(0);     //  0
 * mathSign(-0);    // -0
 * mathSign(NaN);   // NaN
 * mathSign('foo'); // NaN
 * mathSign();      // NaN
 */
export default function sign(x) {
  const n = toNumber(x);

  if (n === 0 || isNumberNaN(n)) {
    return n;
  }

  return n > 0 ? 1 : -1;
}
