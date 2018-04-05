/**
 * @file Converts a value to Uint24.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module toUint24
 */

import _toNumber from './.internal/_toNumber';
import modulo from './modulo';
import _sign from './.internal/_sign';
import _isFinite from './.internal/_isFinite';

const {
  floor,
  abs,
} = Math;

/**
 * The abstract operation ToUint24 converts argument to one of 2^24 integer
 * values in the range 0 through 2^24-1, inclusive.
 *
 * @param {number} argument - The argument to convert to one of 2^24 integers.
 * @returns {number} Integer value, 0 through 2^24-1, inclusive.
 * @example
 * var toUint24 = require('to-uint-24-x');
 * toUint24(1); // 1
 * toUint24(-1); // 16777215 (2^24-1)
 */
export default function toUint24(argument) {
  // Let number be ? ToNumber(argument).
  const number = _toNumber(argument);

  // If number is NaN, +0, -0, +∞, or -∞, return +0.
  if (number === 0 || !_isFinite(number)) {
    return 0;
  }

  // Let int be the mathematical value that is the same sign as number and
  // whose magnitude is floor(abs(number)).
  // Let int24bit be int modulo 2^24.
  return modulo(_sign(number) * floor(abs(number)), 0x1000000);
}
