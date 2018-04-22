/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module findIndex
 */

import assertIsFunction from './assertIsFunction';
import requireObjectCoercible from './requireObjectCoercible';
import toInteger from './toInteger';
import _find from './.internal/_find';

export default function findIndex(array, callback, ...fromIndex) {
  return _find(
    requireObjectCoercible(array),
    assertIsFunction(callback),
    toInteger(fromIndex[0]),
  ).index;
}
