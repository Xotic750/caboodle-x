/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module some
 */

import arraySome from './.internal/arraySome';
import isArrayLike from './isArrayLike';
import someOwn from './someOwn';

export default function some(collection, iteratee, thisArg) {
  return isArrayLike(collection) ?
    arraySome(collection, iteratee, thisArg) :
    someOwn(collection, iteratee, thisArg);
}
