/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module everyOwn
 */

import arrayEvery from './.internal/arrayEvery';
import keys from './keys';

export default function everyOwn(collection, iteratee, thisArg) {
  return arrayEvery(keys(collection), iteratee, thisArg);
}
