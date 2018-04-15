/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module includes
 */

import _includes from './.internal/_includes';
import _toInteger from './.internal/_toInteger';
import requireObjectCoercible from './requireObjectCoercible';

export default function includes(array, searchElement, ...fromIndex) {
  return _includes(
    requireObjectCoercible(array),
    searchElement,
    _toInteger(fromIndex[0]),
  );
}
