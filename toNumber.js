/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module toNumber
 */

import _Number from './.internal/_Number';
import toPrimitive from './toPrimitive';
import _trim from './.internal/_trim';
import _stringSlice from './.internal/_stringSlice';
import _test from './.internal/_test';
import isBinary from './isBinary';
import isOctal from './isOctal';
import isStringType from './isStringType';
import isSymbolType from './isSymbolType';
import _parseInt from './.internal/_parseInt';
import _NaN from './.internal/_NaN';

const nonWSregex = new RegExp('[\u0085\u180e\u200b\ufffe]', 'g');
const hasNonWS = function _hasNonWS(value) {
  return _test(nonWSregex, value);
};

const invalidHexLiteral = /^[-+]0x[0-9a-f]+$/i;
const isInvalidHexLiteral = function _isInvalidHexLiteral(value) {
  return _test(invalidHexLiteral, value);
};

export default function toNumber(argument) {
  const value = toPrimitive(argument, Number);

  if (isSymbolType(value)) {
    throw new TypeError('Cannot convert a Symbol value to a number');
  }

  if (isStringType(value)) {
    if (isBinary(value)) {
      return toNumber(_parseInt(_stringSlice(value, 2), 2));
    }

    if (isOctal(value)) {
      return toNumber(_parseInt(_stringSlice(value, 2), 8));
    }

    if (hasNonWS(value) || isInvalidHexLiteral(value)) {
      return _NaN;
    }

    const trimmed = _trim(value);
    if (trimmed !== value) {
      return toNumber(trimmed);
    }
  }

  return _Number(value);
}
