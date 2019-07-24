/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module rangeRight
 */

import _createRange from './.internal/_createRange';

const rangeFn = _createRange(true);

/**
 * This method is like `range` except that it populates values in
 * descending order.
 *
 * @param {Array} [args] - The arguments array.
 * @param {number} [args.start=0] - The start of the range.
 * @param {number} args.end - The end of the range.
 * @param {number} [args.step=1] - The value to increment or decrement by.
 * @returns {Array} Returns the range of numbers.
 * @example
 *
 * rangeRight(4);
 * // => [3, 2, 1, 0]
 *
 * rangeRight(-4);
 * // => [-3, -2, -1, 0]
 *
 * rangeRight(1, 5);
 * // => [4, 3, 2, 1]
 *
 * rangeRight(0, 20, 5);
 * // => [15, 10, 5, 0]
 *
 * rangeRight(0, -4, -1);
 * // => [-3, -2, -1, 0]
 *
 * rangeRight(1, 4, 0);
 * // => [1, 1, 1]
 *
 * rangeRight(0);
 * // => []
 */
export default function rangeRight(...args) {
  return rangeFn(...args);
}
