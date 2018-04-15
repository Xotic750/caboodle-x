/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module any
 */

import _assertIsFunction from './.internal/_assertIsFunction';
import requireObjectCoercible from './requireObjectCoercible';
import _toInteger from './.internal/_toInteger';
import _any from './.internal/_any';

export default function any(array, callback, ...fromIndex) {
  return _any(
    requireObjectCoercible(array),
    _assertIsFunction(callback),
    _toInteger(fromIndex[0]),
  );
}
