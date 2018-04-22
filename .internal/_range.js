/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _range
 */

import _Array from './_Array';

const {max, ceil} = Math;

/**
 * The base implementation of `range` and `rangeRight` which doesn't
 * coerce arguments.
 *
 * @private
 * @param {number} start - The start of the range.
 * @param {number} end - The end of the range.
 * @param {number} step - The value to increment or decrement by.
 * @param {boolean} [fromRight] - Specify iterating from right to left.
 * @returns {Array} Returns the range of numbers.
 */
export default function _range(start, end, step, fromRight) {
  let index = -1;
  let length = max(ceil((end - start) / (step || 1)), 0);
  let current = start;
  const result = _Array(length);

  while (length) {
    length -= 1;
    result[fromRight ? length : (index += 1)] = current;
    current += step;
  }

  return result;
}
