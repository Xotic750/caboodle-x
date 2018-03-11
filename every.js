/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module every
 */

import arrayEvery from './.internal/arrayEvery';
import isArrayLike from './isArrayLike';
import everyOwn from './everyOwn';

export default function every(collection, iteratee, thisArg) {
  return isArrayLike(collection) ?
    arrayEvery(collection, iteratee, thisArg) :
    everyOwn(collection, iteratee, thisArg);
}
