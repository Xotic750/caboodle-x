/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _toNumber
 */

import _Number from './_Number';
import toPrimitive from '../toPrimitive';
import _trim from './_trim';
import _stringSlice from './_stringSlice';
import _test from './_test';
import isBinary from '../isBinary';
import isOctal from '../isOctal';
import isStringType from '../isStringType';
import isSymbolType from '../isSymbolType';
import _parseInt from './_parseInt';
import _NaN from './_NaN';

const nonWSregex = new RegExp('[\u0085\u180e\u200b\ufffe]', 'g');
const hasNonWS = function _hasNonWS(value) {
  return _test(nonWSregex, value);
};

const invalidHexLiteral = /^[-+]0x[0-9a-f]+$/i;
const isInvalidHexLiteral = function _isInvalidHexLiteral(value) {
  return _test(invalidHexLiteral, value);
};

const dropPrefix = function _dropPrefix(value) {
  return _stringSlice(value, 2);
};

export default function _toNumber(argument) {
  const value = toPrimitive(argument, Number);

  if (isSymbolType(value)) {
    throw new TypeError('Cannot convert a Symbol value to a number');
  }

  if (isStringType(value)) {
    if (isBinary(value)) {
      return _toNumber(_parseInt(dropPrefix(value), 2));
    }

    if (isOctal(value)) {
      return _toNumber(_parseInt(dropPrefix(value), 8));
    }

    if (hasNonWS(value) || isInvalidHexLiteral(value)) {
      return _NaN;
    }

    const trimmed = _trim(value);
    if (trimmed !== value) {
      return _toNumber(trimmed);
    }
  }

  return _Number(value);
}
