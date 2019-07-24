/**
 * @file Shim for Math.sign.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module sign
 */

import _toNumber from './_toNumber';
import _isNaN from './_isNaN';

/**
 * This method returns the sign of a number, indicating whether the number is positive,
 * negative or zero.
 *
 * @param {*} x - A number.
 * @returns {number} A number representing the sign of the given argument. If the argument
 * is a positive number, negative number, positive zero or negative zero, the function will
 * return 1, -1, 0 or -0 respectively. Otherwise, NaN is returned.
 */
export default function _sign(x) {
  const n = _toNumber(x);

  if (n === 0 || _isNaN(n)) {
    return n;
  }

  return n > 0 ? 1 : -1;
}
