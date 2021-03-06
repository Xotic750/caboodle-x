/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isArrayLike
 */

import isNil from './isNil';
import isFunction from './isFunction';
import isWholeNumber from './isWholeNumber';

export default function isArrayLike(value) {
  return !isNil(value) && isWholeNumber(value.length) && !isFunction(value);
}
