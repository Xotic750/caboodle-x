/**
 * @file Utility to test if a comparate exists in a list of comparates, return comparate or supply a fallback.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module getAt
 */

import requireObjectCoercible from './requireObjectCoercible';
import _getAt from './.internal/_getAt';

export default function getAt(array, ...position) {
  return _getAt(requireObjectCoercible(array), ...position);
}
