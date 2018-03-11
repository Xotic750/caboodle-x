/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module reduceOwn
 */

import arrayReduce from './.internal/arrayReduce';
import keys from './keys';

export default function reduceOwn(collection, iteratee, ...initialValue) {
  return arrayReduce(keys(collection), iteratee, ...initialValue);
}
