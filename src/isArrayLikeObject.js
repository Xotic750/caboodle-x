/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isArrayLikeObject
 */

import isObjectLike from 'src/isObjectLike';
import isArrayLike from 'src/isArrayLike';

export default function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}
