/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isStringTypeOrInteger
 */

import isStringType from 'src/isNil';

export default function isStringTypeOrInteger(value) {
  return isStringType(value) || Number.isSafeInteger(value);
}
