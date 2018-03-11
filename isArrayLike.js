/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isArrayLike
 */

import isNil from './isNil';
import isFunctionType from './isFunctionType';
import isWholeNumber from './isWholeNumber';

export default function isArrayLike(value) {
  return !isNil(value) && !isFunctionType(value) && isWholeNumber(value.length);
}
