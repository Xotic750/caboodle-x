/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module filterOwn
 */

import arrayFilter from './.internal/arrayFilter';
import keys from './keys';

export default function filterOwn(collection, iteratee, thisArg) {
  return arrayFilter(keys(collection), iteratee, thisArg);
}
