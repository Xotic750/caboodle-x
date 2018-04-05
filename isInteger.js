/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isInteger
 */

import isNumberType from './isNumberType';
import _toInteger from './.internal/_toInteger';

export default function isInteger(value) {
  return isNumberType(value) && _toInteger(value) === value;
}
