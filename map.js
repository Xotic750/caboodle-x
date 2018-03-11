/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module forEach
 */

import arrayMap from './.internal/arrayMap';
import isArrayLike from './isArrayLike';
import mapOwn from './mapOwn';

export default function map(collection, iteratee, thisArg) {
  return isArrayLike(collection) ?
    arrayMap(collection, iteratee, thisArg) :
    mapOwn(collection, iteratee, thisArg);
}
