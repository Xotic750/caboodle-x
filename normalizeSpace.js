/**
 * @file Trims and replaces sequences of whitespace characters by a single space.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module normalizeSpace
 */

import _normalizeSpace from './.internal/_normalizeSpace';
import requireCoercibleToString from './requireCoercibleToString';

/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string.
 *
 * @param {string} string - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The normalized string.
 */
export default function normalizeSpace(string) {
  return _normalizeSpace(requireCoercibleToString(string));
}
