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
 * @example
 * var numberFormat = require('number-format-x');
 *
 * numberFormat(12345678.9, 3); // "12,345,678.900"
 * numberFormat(12345678.9, null, null, '.', ','); // "12.345.678,90"
 * numberFormat(123456.789, 4, 4, ' ', ':'); // "12 3456:7890"
 * numberFormat(12345678.9, 0, null, '-'); // "12-345-679"
 */
export default function numberFormat(value, ...rest) {
  const number = _toNumber(value);
  if (!_isFinite(number)) {
    return _numberToString(number);
  }

  // 'digits' must be >= 0 or <= 20 otherwise a RangeError is thrown by Number#_toFixed.
  const digits =
    rest.length > 0 && !isNil(rest[0]) ? clamp(_toInteger(rest[0]), 0, 20) : 2;
  // Formats a number using fixed-point notation.
  let fixed = numberToDecimalString(_toFixed(number, digits));
  if (digits > 0) {
    const parts = _split(fixed, '.');
    parts[1] = _stringSlice(`${parts[1] || ''}00000000000000000000`, 0, digits);
    fixed = _join(parts, '.');
  }

  const sectionLength =
    rest.length > 1 && !isNil(rest[1]) ? _toInteger(rest[1]) : 3;
  // Formats a number (string) of fixed-point notation, with user delimiters.
  const sectionDelimiter =
    rest.length > 2 && !isNil(rest[2]) ? _toString(rest[2]) : ',';
  const decimalDelimiter =
    rest.length > 3 && !isNil(rest[3]) ? _toString(rest[3]) : '.';

  return _replace(
    decimalDelimiter === '.' ? fixed : _replace(fixed, '.', decimalDelimiter),
    new _RegExp(
      `\\d(?=(\\d{${sectionLength}})+${digits > 0 ? '\\D' : '$'})`,
      'g',
    ),
    `$&${sectionDelimiter}`,
  );
}
