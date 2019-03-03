/**
 * @file Convert a base-10 or scientific E-notation value to a decimal form string.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module numberToDecimalString
 */

import _Number from './.internal/_Number';
import _charAt from './.internal/_charAt';
import _stringSlice from './.internal/_stringSlice';
import _replace from './.internal/_replace';
import _stringIndexOf from './.internal/_stringIndexOf';
import _join from './.internal/_join';
import _search from './.internal/_search';
import _test from './.internal/_test';
import _toString from './.internal/_toString';

const EMPTY_STRING = '';
const DECIMAL_MARK = '.';
const HYPHEN_MINUS = '-';
const ZERO_SYMBOL = '0';
const MINUS_ZERO_SYMBOL = HYPHEN_MINUS + ZERO_SYMBOL;
const ERROR_MSG = 'not a valid base 10 numeric value';
const validPattern = /^-?(?:(?:\d|[1-9]\d*)(?:\.\d+)?)(?:e[+-]?\d+)?$/i;
const expPattern = /e/i;

/**
 * This method converts a base-10 or scientific E-notation value to
 * a decimal form string. Javascript's IEE 754 double-precision numbers
 * give the same precision as `number.toString()`.
 *
 * @param {number|string} value - The value to be converted.
 * @throws {TypeError} If value is not a valid format.
 * @throws {TypeError} If value is a Symbol or not coercible.
 * @returns {string} The value converted to a decimal form string.
 */
export default function toDecimalFormString(value) {
  let workingValue = value;

  // Minus zero?
  if (workingValue === 0 && 1 / workingValue < 0) {
    workingValue = MINUS_ZERO_SYMBOL;
  } else {
    workingValue = _toString(workingValue);

    if (!_test(validPattern, workingValue)) {
      throw new TypeError(ERROR_MSG);
    }
  }

  // Determine sign.
  let sign;

  if (_charAt(workingValue, 0) === HYPHEN_MINUS) {
    workingValue = _stringSlice(workingValue, 1);
    sign = -1;
  } else {
    sign = 1;
  }

  // Decimal point?
  const pointIndex = _stringIndexOf(workingValue, DECIMAL_MARK);

  if (pointIndex > -1) {
    workingValue = _replace(workingValue, DECIMAL_MARK, EMPTY_STRING);
  }

  let exponentIndex = pointIndex;
  // Exponential form?
  let index = _search(workingValue, expPattern);

  if (index > 0) {
    // Determine exponent.
    if (exponentIndex < 0) {
      exponentIndex = index;
    }

    exponentIndex += _Number(_stringSlice(workingValue, index + 1));
    workingValue = _stringSlice(workingValue, 0, index);
  } else if (exponentIndex < 0) {
    // Integer.
    exponentIndex = workingValue.length;
  }

  let leadingZeroIndex = workingValue.length;
  // Determine leading zeros.
  index = 0;
  while (index < leadingZeroIndex && _charAt(workingValue, index) === ZERO_SYMBOL) {
    index += 1;
  }

  let coefficient;
  let exponent;

  if (index === leadingZeroIndex) {
    // Zero.
    exponent = 0;
    coefficient = [0];
  } else {
    // Determine trailing zeros.
    if (leadingZeroIndex > 0) {
      do {
        leadingZeroIndex -= 1;
      } while (_charAt(workingValue, leadingZeroIndex) === ZERO_SYMBOL && leadingZeroIndex > 0);
    }

    exponent = exponentIndex - index - 1;
    coefficient = [];
    coefficient.length = leadingZeroIndex + 1;

    // Convert string to array of digits without leading/trailing zeros.
    let position = 0;
    while (index <= leadingZeroIndex) {
      coefficient[position] = _Number(_charAt(workingValue, index));
      position += 1;
      index += 1;
    }
  }

  let decimalForm = _join(coefficient, EMPTY_STRING);
  const decimalFormLength = decimalForm.length;

  if (exponent < 0) {
    exponent += 1;
    while (exponent) {
      decimalForm = ZERO_SYMBOL + decimalForm;
      exponent += 1;
    }

    decimalForm = ZERO_SYMBOL + DECIMAL_MARK + decimalForm;
  } else if (exponent > 0) {
    exponent += 1;

    if (exponent > decimalFormLength) {
      exponent -= decimalFormLength;
      while (exponent) {
        decimalForm += ZERO_SYMBOL;
        exponent -= 1;
      }
    } else if (exponent < decimalFormLength) {
      decimalForm = _stringSlice(decimalForm, 0, exponent) + DECIMAL_MARK + _stringSlice(decimalForm, exponent);
    }

    // Exponent is zero.
  } else if (decimalFormLength > 1) {
    decimalForm = _charAt(decimalForm, 0) + DECIMAL_MARK + _stringSlice(decimalForm, 1);
  }

  return sign < 0 ? HYPHEN_MINUS + decimalForm : decimalForm;
}
