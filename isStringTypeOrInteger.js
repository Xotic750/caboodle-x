/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isStringTypeOrInteger
 */

import isSafeInteger from './.internal/isSafeInteger';
import isStringType from './isNil';

export default function isStringTypeOrInteger(value) {
  return isStringType(value) || isSafeInteger(value);
}
