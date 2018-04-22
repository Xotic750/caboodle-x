/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module includes
 */

import _includes from './.internal/_includes';
import toInteger from './toInteger';
import requireObjectCoercible from './requireObjectCoercible';

export default function includes(array, searchElement, ...fromIndex) {
  return _includes(
    requireObjectCoercible(array),
    searchElement,
    toInteger(fromIndex[0]),
  );
}
