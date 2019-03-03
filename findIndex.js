/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module findIndex
 */

import _assertIsFunction from './.internal/_assertIsFunction';
import requireObjectCoercible from './requireObjectCoercible';
import _toInteger from './.internal/_toInteger';
import _find from './.internal/_find';

export default function findIndex(array, callback, ...fromIndex) {
  return _find(requireObjectCoercible(array), _assertIsFunction(callback), _toInteger(fromIndex[0])).index;
}
