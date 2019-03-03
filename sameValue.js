/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module sameValue
 */

import _isNaN from './.internal/_isNaN';

/**
 * This method is the comparison abstract operation SameValue(x, y), where x
 * and y are ECMAScript language values, produces true or false.
 *
 * @param {*} value1 - The first value to compare.
 * @param {*} value2 - The second value to compare.
 */
export default function sameValue(value1, value2) {
  if (value1 === 0 && value2 === 0) {
    return 1 / value1 === 1 / value2;
  }

  return value1 === value2 || (_isNaN(value1) && _isNaN(value2));
}
