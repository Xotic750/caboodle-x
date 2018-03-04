/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isArrayLike
 */

import isNull from 'src/isNull';
import isFunctionType from 'src/isFunctionType';
import isWholeNumber from 'src/isWholeNumber';

export default function isArrayLike(value) {
  return !isNull(value) && !isFunctionType(value) && isWholeNumber(value.length);
}
