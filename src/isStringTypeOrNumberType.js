/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isStringTypeOrNumberType
 */

import isStringType from 'src/isStringType';
import isNumberType from 'src/isNumberType';

export default function isStringTypeOrNumberType(value) {
  return isStringType(value) || isNumberType(value);
}
