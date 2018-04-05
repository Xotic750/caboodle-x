/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module regExpEscape
 */

import _replace from './.internal/_replace';
import requireCoercibleToString from './requireCoercibleToString';

const pattern = /[\^$\\.*+?()[\]{}|]/g;

/**
 * Method to safely escape `RegExp` special tokens for use in `new RegExp`.
 *
 * @param {string} string - The string to be escaped.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The escaped string.
 * @example
 * var regexpEscape = require('caboodle-x/regexpEscape');
 *
 * var str = 'hello. how are you?';
 * var regex = new RegExp(regexpEscape(str), 'g');
 * String(regex); // '/hello\. how are you\?/g'
 */
export default function regExpEscape(string) {
  return _replace(requireCoercibleToString(string), pattern, '\\$&');
}
