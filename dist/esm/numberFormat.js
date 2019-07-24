/**
 * @file Format a number.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module numberFormat
 */
import _RegExp from './.internal/_RegExp';
import _toFixed from './.internal/_toFixed';
import _numberToString from './.internal/_numberToString';
import _replace from './.internal/_replace';
import _split from './.internal/_split';
import _stringSlice from './.internal/_stringSlice';
import _join from './.internal/_join';
import _isFinite from './.internal/_isFinite';
import _toNumber from './.internal/_toNumber';
import _toInteger from './.internal/_toInteger';
import clamp from './clamp';
import _toString from './.internal/_toString';
import numberToDecimalString from './numberToDecimalString';
import isNil from './isNil';
/**
 * Format a given number using fixed-point notation, with user specified digit
 * counts and separators. `null` or 'undefined' can be used for optional
 * arguments to denote that the default value is to be used.
 *
 * @param {number} value - The numerical value to be formatted.
 * @param {Array} [rest] - The remaining arguments array.
 * @param {number} [rest.digits=2] - The number of digits to appear after the
 *  decimal point; this may be a value between 0 and 20, inclusive.
 * @param {number} [rest.sectionLength=3] - Length of integer part sections.
 * @param {string} [rest.sectionDelimiter=,] - Integer part section delimiter.
 * @param {string} [rest.decimalDelimiter=.] - Decimal delimiter.
 * @returns {string} The numerical value with the chosen formatting.
 */

export default function numberFormat(value) {
  var number = _toNumber(value);

  if (!_isFinite(number)) {
    return _numberToString(number);
  } // 'digits' must be >= 0 or <= 20 otherwise a RangeError is thrown by Number#_toFixed.


  var digits = (arguments.length <= 1 ? 0 : arguments.length - 1) > 0 && !isNil(arguments.length <= 1 ? undefined : arguments[1]) ? clamp(_toInteger(arguments.length <= 1 ? undefined : arguments[1]), 0, 20) : 2; // Formats a number using fixed-point notation.

  var fixed = numberToDecimalString(_toFixed(number, digits));

  if (digits > 0) {
    var parts = _split(fixed, '.');

    parts[1] = _stringSlice("".concat(parts[1] || '', "00000000000000000000"), 0, digits);
    fixed = _join(parts, '.');
  }

  var sectionLength = (arguments.length <= 1 ? 0 : arguments.length - 1) > 1 && !isNil(arguments.length <= 2 ? undefined : arguments[2]) ? _toInteger(arguments.length <= 2 ? undefined : arguments[2]) : 3; // Formats a number (string) of fixed-point notation, with user delimiters.

  var sectionDelimiter = (arguments.length <= 1 ? 0 : arguments.length - 1) > 2 && !isNil(arguments.length <= 3 ? undefined : arguments[3]) ? _toString(arguments.length <= 3 ? undefined : arguments[3]) : ',';
  var decimalDelimiter = (arguments.length <= 1 ? 0 : arguments.length - 1) > 3 && !isNil(arguments.length <= 4 ? undefined : arguments[4]) ? _toString(arguments.length <= 4 ? undefined : arguments[4]) : '.';
  return _replace(decimalDelimiter === '.' ? fixed : _replace(fixed, '.', decimalDelimiter), new _RegExp("\\d(?=(\\d{".concat(sectionLength, "})+").concat(digits > 0 ? '\\D' : '$', ")"), 'g'), "$&".concat(sectionDelimiter));
}
//# sourceMappingURL=numberFormat.js.map