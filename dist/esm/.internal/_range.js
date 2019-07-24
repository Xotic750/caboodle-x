/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _range
 */
import _Array from './_Array';
var max = Math.max,
    ceil = Math.ceil;
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
  var index = -1;
  var length = max(ceil((end - start) / (step || 1)), 0);
  var current = start;

  var result = _Array(length);

  while (length) {
    length -= 1;
    result[fromRight ? length : index += 1] = current;
    current += step;
  }

  return result;
}
//# sourceMappingURL=_range.js.map