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
import isNumberFinite from './isNumberFinite';
import toNumber from './toNumber';
import toInteger from './toInteger';
import clamp from './clamp';
import toStr from './toString';
import isNil from './isNil';
import numberToDecimalString from './numberToDecimalString';

const isArgSupplied = function _isArgSupplied(args, index) {
  return args.length > index && !isNil(args[index]);
};

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
  const number = toNumber(value);
  if (!isNumberFinite(number)) {
    return _numberToString(number);
  }

  // 'digits' must be >= 0 or <= 20 otherwise a RangeError is thrown by Number#_toFixed.
  const digits = isArgSupplied(rest, 0) ? clamp(toInteger(rest[0]), 0, 20) : 2;
  // Formats a number using fixed-point notation.
  let fixed = numberToDecimalString(_toFixed(number, digits));
  if (digits > 0) {
    const parts = _split(fixed, '.');
    parts[1] = _stringSlice(`${parts[1] || ''}00000000000000000000`, 0, digits);
    fixed = _join(parts, '.');
  }

  const sectionLength = isArgSupplied(rest, 1) ? toInteger(rest[1]) : 3;
  // Formats a number (string) of fixed-point notation, with user delimiters.
  const sectionDelimiter = isArgSupplied(rest, 2) ? toStr(rest[2]) : ',';
  const decimalDelimiter = isArgSupplied(rest, 3) ? toStr(rest[3]) : '.';

  return _replace(
    decimalDelimiter === '.' ? fixed : _replace(fixed, '.', decimalDelimiter),
    new _RegExp(
      `\\d(?=(\\d{${sectionLength}})+${digits > 0 ? '\\D' : '$'})`,
      'g',
    ),
    `$&${sectionDelimiter}`,
  );
}
