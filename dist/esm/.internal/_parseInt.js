/**
 * @file Parses a string argument and returns an integer of the specified radix.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _parseInt
 */
import toStr from '../toString';
import _trimLeft from './_trimLeft';
import _Number from './_Number';
import _charAt from './_charAt';
import _test from './_test';
import _NaN from './_NaN';
var parse = parseInt;
var hexPattern = /^[-+]?0x/i;
/**
 * This method parses a string argument and returns an integer of the specified
 * radix (the base in mathematical numeral systems).
 *
 * @param {string} string - The value to parse. If the string argument is not a
 *  string, then it is converted to a string (using the ToString abstract
 *  operation). Leading whitespace in the string argument is ignored.
 * @param {number} radix - An integer between 2 and 36 that represents the radix
 *  (the base in mathematical numeral systems) of the above mentioned string.
 *  Specify 10 for the decimal numeral system commonly used by humans. Always
 *  specify this parameter to eliminate reader confusion and to guarantee
 *  predictable behavior. Different implementations produce different results
 *  when a radix is not specified, usually defaulting the value to 10.
 * @throws {TypeError} If target is a Symbol or is not coercible.
 * @returns {number} An integer number parsed from the given string. If the first
 *  character cannot be converted to a number, NaN is returned.
 */

export default function _parseInt(string, radix) {
  var str = _trimLeft(toStr(string));

  if (_charAt(str, 0) === "\u180E") {
    return _NaN;
  }

  return parse(str, _Number(radix) || (_test(hexPattern, str) ? 16 : 10));
}
//# sourceMappingURL=_parseInt.js.map