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
 */

export default function isSurrogatePair() {
  var argsLength = arguments.length;

  if (argsLength < 1) {
    return false;
  }

  var first;
  var second;
  var char1 = arguments.length <= 0 ? undefined : arguments[0];

  if (argsLength === 1) {
    if (isString(char1) && char1.length === 2) {
      first = _charCodeAt(char1, 0);
      second = _charCodeAt(char1, 1);
    } else {
      return false;
    }
  } else if (argsLength > 1) {
    var char2 = arguments.length <= 1 ? undefined : arguments[1];

    if (!isString(char1) || char1.length !== 1 || !isString(char2) || char2.length !== 1) {
      return false;
    }

    first = _charCodeAt(char1, 0);
    second = _charCodeAt(char2, 0);
  }

  return first >= 0xd800 && first <= 0xdbff && second >= 0xdc00 && second <= 0xdfff;
}
//# sourceMappingURL=isSurrogatePair.js.map