/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module someOwn
 */

import arraySome from './.internal/arraySome';
import keys from './keys';

export default function someOwn(collection, iteratee, thisArg) {
  return arraySome(keys(collection), iteratee, thisArg);
}
