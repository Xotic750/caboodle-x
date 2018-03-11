/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module mapOwn
 */

import arrayMap from './.internal/arrayMap';
import keys from './keys';

export default function mapOwn(collection, iteratee, thisArg) {
  return arrayMap(keys(collection), iteratee, thisArg);
}
