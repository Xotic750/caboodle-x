/**
 * @file Utility to test if a comparate exists in a list of comparates, return comparate or supply a fallback.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module last
 */

import requireObjectCoercible from './requireObjectCoercible';
import _last from './.internal/_last';

export default function last(array) {
  return _last(requireObjectCoercible(array));
}
