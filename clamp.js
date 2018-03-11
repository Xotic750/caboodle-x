/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module clamp
 */

import toNumber from './.internal/toNumber';
import numberIsNaN from './.internal/numberIsNaN';

/**
 * This method clamp a number to min and max limits inclusive.
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
 *
 * clamp(10, -5, 5); // 5
 */
export default function clamp(value, ...rest) {
  const number = toNumber(value);
  const restLength = rest.length;
  if (restLength < 1) {
    return number;
  }

  let min = toNumber(rest[0]);
  let max = toNumber(rest[1]);
  if (restLength < 2) {
    max = min;
    min = 0;
  }

  if (numberIsNaN(min) || numberIsNaN(max)) {
    return NaN;
  }

  if (min > max) {
    throw new RangeError('"min" > "max"');
  }

  if (number < min) {
    return min;
  }

  if (number > max) {
    return max;
  }

  return number;
}
