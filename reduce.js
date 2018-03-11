/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module reduce
 */

import arrayReduce from './.internal/arrayReduce';
import isArrayLike from './isArrayLike';
import reduceOwn from './reduceOwn';

export default function map(collection, iteratee, ...initialValue) {
  return isArrayLike(collection) ?
    arrayReduce(collection, iteratee, ...initialValue) :
    reduceOwn(collection, iteratee, ...initialValue);
}
