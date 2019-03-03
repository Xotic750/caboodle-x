/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module hasOwnProperty
 */

import _hasOwnProperty from './.internal/_hasOwnProperty';
import requireObjectCoercible from './requireObjectCoercible';
import toPropertyKey from './toPropertyKey';

export default function hasOwnProperty(object, property) {
  return _hasOwnProperty(requireObjectCoercible(object), toPropertyKey(property));
}
