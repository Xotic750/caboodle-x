/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isStringTypeOrNumberType
 */

import isStringType from './isStringType';
import isNumberType from './isNumberType';

export default function isStringTypeOrNumberType(value) {
  return isStringType(value) || isNumberType(value);
}
