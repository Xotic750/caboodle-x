/**
 * @file Utility to parse a string to a decimal value.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module parseDecimal
 */

import _parseInt from './.internal/_parseInt';

/**
 * Parse a string to a decimal value.
 *
 * @param {string} value - The string to be converted to a decimal value.
 * @returns {number} The parsed decimal value.
 */
export default function parseDecimal(value) {
  return _parseInt(value, 10);
}
