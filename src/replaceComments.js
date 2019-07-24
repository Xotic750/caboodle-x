/**
 * @file Replace the comments in a string.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module replaceComments
 */

import _toString from './.internal/_toString';
import _replace from './.internal/_replace';
import requireCoercibleToString from './requireCoercibleToString';

const STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;

/**
 * This method replaces comments in a string.
 *
 * @param {string} string - The string to be stripped.
 * @param {string} [replacement] - The string to be used as a replacement.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @throws {TypeError} If replacement is not coercible.
 * @returns {string} The new string with the comments replaced.
 */
export default function replaceComments(string, ...replacement) {
  return _replace(requireCoercibleToString(string), STRIP_COMMENTS, replacement.length ? _toString(replacement[0]) : '');
}