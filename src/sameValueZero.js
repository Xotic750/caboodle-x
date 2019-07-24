/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module sameValueZero
 */

import sameValue from './sameValue';

export default function sameValueZero(x, y) {
  return x === y || sameValue(x, y);
}
