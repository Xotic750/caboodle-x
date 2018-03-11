/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module forOwn
 */

import arrayForEach from './.internal/arrayForEach';
import keys from './keys';

export default function forOwn(collection, iteratee, thisArg) {
  arrayForEach(keys(collection), iteratee, thisArg);

  return collection;
}
