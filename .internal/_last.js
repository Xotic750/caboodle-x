/**
 * @file Utility to test if a comparate exists in a list of comparates, return comparate or supply a fallback.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _last
 */

import _getAt from './_getAt';

export default function _last(array) {
  return _getAt(array, array.length - 1);
}
