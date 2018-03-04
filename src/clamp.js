/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module clamp
 */

import ES from 'es-abstract';

/**
 * This method clamp a number to min and max limits inclusive.
 *
 * @param {Array} args - The arguments array.
 * @param {number} args.value - The number to be clamped.
 * @param {number} [args.lower=0] - The minimum number.
 * @param {number} args.upper - The maximum number.
 * @throws {RangeError} If lower > upper.
 * @returns {number} The clamped number.
 * @example
 *
 * clamp(-10, -5, 5); // -5
 *
 * clamp(10, -5, 5); // 5
 */
export default function clamp(...args) {
  const [value, lower, upper] = args;

  const number = ES.ToNumber(value);
  const argsLength = args.length;
  if (argsLength < 2) {
    return number;
  }

  let min = ES.ToNumber(lower);
  let max;
  if (argsLength < 3) {
    max = min;
    min = 0;
  } else {
    max = ES.ToNumber(upper);
  }

  if (Number.isNaN(min) || Number.isNaN(max)) {
    return NaN;
  }

  if (min > max) {
    throw new RangeError('"lower" must be less than "upper"');
  }

  if (number < min) {
    return min;
  }

  if (number > max) {
    return max;
  }

  return number;
}
