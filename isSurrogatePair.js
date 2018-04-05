/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isSurrogatePair
 */

import isString from 'is-string';
import _charCodeAt from './.internal/_charCodeAt';

/**
 * Tests if the two character arguments combined are a valid UTF-16
 * surrogate pair.
 *
 * @param {Array} args - The arguments array.
 * @param {*} args.char1 - The character combination, or if `char2` is supplied then
 *  the first character of a suspected surrogate pair.
 * @param {*} [args.char2] - The second character of a suspected surrogate pair.
 * @returns {boolean} Returns true if the two characters create a valid
 *  'UTF-16' surrogate pair; otherwise false.
 * @example
 * var isSurrogatePair = require('is-surrogate-pair-x');
 *
 * var test1 = 'a';
 * var test2 = '𠮟';
 *
 * isSurrogatePair(test1); // false
 * isSurrogatePair(test1.charAt(0), test1.charAt(1)); // false
 * isSurrogatePair(test2); // true
 * isSurrogatePair(test2.charAt(0), test2.charAt(1)); // true
 */
export default function isSurrogatePair(...args) {
  const argsLength = args.length;

  if (argsLength < 1) {
    return false;
  }

  let first;
  let second;
  const char1 = args[0];

  if (argsLength === 1) {
    if (isString(char1) && char1.length === 2) {
      first = _charCodeAt(char1, 0);
      second = _charCodeAt(char1, 1);
    } else {
      return false;
    }
  } else if (argsLength > 1) {
    const char2 = args[1];

    if (!isString(char1) || char1.length !== 1 || !isString(char2) || char2.length !== 1) {
      return false;
    }

    first = _charCodeAt(char1, 0);
    second = _charCodeAt(char2, 0);
  }

  return first >= 0xD800 && first <= 0xDBFF && second >= 0xDC00 && second <= 0xDFFF;
}
