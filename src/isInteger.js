/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isInteger
 */

import isNumberType from './isNumberType';
import _toInteger from './.internal/_toInteger';
import _isFinite from './.internal/_isFinite';

export default function isInteger(value) {
  return isNumberType(value) && _isFinite(value) && _toInteger(value) === value;
}
