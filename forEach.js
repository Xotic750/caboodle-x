/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module forEach
 */

import arrayForEach from './.internal/arrayForEach';
import isArrayLike from './isArrayLike';
import forOwn from './forOwn';

export default function forEach(collection, iteratee, thisArg) {
  if (isArrayLike(collection)) {
    arrayForEach(collection, iteratee, thisArg);

    return collection;
  }

  return forOwn(collection, iteratee, thisArg);
}
