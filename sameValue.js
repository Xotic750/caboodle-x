/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module sameValue
 */

import isNumberNaN from './isNumberNaN';

/**
 * This method is the comparison abstract operation SameValue(x, y), where x
 * and y are ECMAScript language values, produces true or false.
 *
 * @param {*} value1 - The first value to compare.
 * @param {*} value2 - The second value to compare.
 * @returns {boolean} A Boolean indicating whether or not the two arguments are
 *  the same value.
 * @example
 * var sameValue = require('same-value-x');
 *
 * sameValue(1, 1); // true
 * sameValue(true, true); // true
 * sameValue(NaN, NaN); // true
 * sameValue(true, false); // false
 * sameValue(0, -0); // false
 */
export default function sameValue(value1, value2) {
  if (value1 === 0 && value2 === 0) {
    return 1 / value1 === 1 / value2;
  }

  return value1 === value2 || (isNumberNaN(value1) && isNumberNaN(value2));
}
