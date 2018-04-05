/**
 * @file Utility that creates a delayed promise.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _toInteger
 */

import _isNaN from './_isNaN';
import _isFinite from './_isFinite';
import _toNumber from './_toNumber';
import _sign from './_sign';

const {abs, floor} = Math;

export default function _toInteger(value) {
  const number = _toNumber(value);

  if (_isNaN(number)) {
    return 0;
  }

  if (number === 0 || !_isFinite(number)) {
    return number;
  }

  return _sign(number) * floor(abs(number));
}
