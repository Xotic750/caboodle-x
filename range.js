/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module range
 */

import _createRange from './.internal/_createRange';

const rangeFn = _createRange();

/**
 * Creates an array of numbers (positive and/or negative) progressing from
 * `start` up to, but not including, `end`. A step of `-1` is used if a negative
 * `start` is specified without an `end` or `step`. If `end` is not specified,
 * it's set to `start` with `start` then set to `0`.
 *
 * **Note:** JavaScript follows the IEEE-754 standard for resolving
 * floating-point values which can produce unexpected results.
 *
 * @param {Array} [args] - The arguments array.
 * @param {number} [args.start=0] - The start of the range.
 * @param {number} args.end - The end of the range.
 * @param {number} [args.step=1] - The value to increment or decrement by.
 * @returns {Array} Returns the range of numbers.
 * @example
 *
 * range(4);
 * // => [0, 1, 2, 3]
 *
 * range(-4);
 * // => [0, -1, -2, -3]
 *
 * range(1, 5);
 * // => [1, 2, 3, 4]
 *
 * range(0, 20, 5);
 * // => [0, 5, 10, 15]
 *
 * range(0, -4, -1);
 * // => [0, -1, -2, -3]
 *
 * range(1, 4, 0);
 * // => [1, 1, 1]
 *
 * range(0);
 * // => []
 */
export default function range(...args) {
  return rangeFn(...args);
}
