/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module filter
 */

import arrayFilter from './.internal/arrayFilter';
import isArrayLike from './isArrayLike';
import filterOwn from './filterOwn';

export default function filter(collection, iteratee, thisArg) {
  return isArrayLike(collection) ?
    arrayFilter(collection, iteratee, thisArg) :
    filterOwn(collection, iteratee, thisArg);
}
