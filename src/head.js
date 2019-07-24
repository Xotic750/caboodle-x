/**
 * @file Utility to test if a comparate exists in a list of comparates, return comparate or supply a fallback.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module head
 */

import requireObjectCoercible from './requireObjectCoercible';
import _head from './.internal/_head';

export default function head(array) {
  return _head(requireObjectCoercible(array));
}
