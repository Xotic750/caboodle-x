/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module toWholeNumber
 */

import _toInteger from './.internal/_toInteger';
import MAX_SAFE_INTEGER from './MAX_SAFE_INTEGER';

export default function toWholeNumber(value) {
  const integer = _toInteger(value);

  // includes converting -0 to +0
  if (integer <= 0) {
    return 0;
  }

  return integer > MAX_SAFE_INTEGER ? MAX_SAFE_INTEGER : integer;
}