/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isFalsey
 */

import _Boolean from './.internal/_Boolean';
import _negate from './.internal/_negate';

const predicate = _negate(_Boolean);

export default function isFalsey(value) {
  return predicate(value);
}
