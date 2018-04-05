/**
 * @file Utility that clamps a number to min and max limits inclusive.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module clamp
 */

import _clamp from './.internal/_clamp';
import _toNumber from './.internal/_toNumber';

/**
 * This method clamps a number to min and max limits inclusive.
 *
 * @param {number} value - The number to be clamped.
 * @param {Array} rest - The remaining arguments array.
 * @param {number} [rest.min=0] - The minimum number.
 * @param {number} rest.max - The maximum number.
 * @throws {RangeError} If min > max.
 * @returns {number} The clamped number.
 * @example
 *
 * clamp(-10, -5, 5); // -5
 * clamp(10, -5, 5); // 5
 */
export default function clamp(value, ...rest) {
  const number = _toNumber(value);
  const restLength = rest.length;

  if (restLength < 1) {
    return number;
  }

  let min = _toNumber(rest[0]);
  let max = _toNumber(rest[1]);
  if (restLength < 2) {
    max = min;
    min = 0;
  }

  if (min > max) {
    throw new RangeError('"min" > "max"');
  }

  return _clamp(number, min, max);
}
