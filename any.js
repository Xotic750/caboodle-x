/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module any
 */

import assertIsFunction from './assertIsFunction';
import requireObjectCoercible from './requireObjectCoercible';
import toInteger from './toInteger';
import _any from './.internal/_any';

export default function any(array, callback, ...fromIndex) {
  return _any(
    requireObjectCoercible(array),
    assertIsFunction(callback),
    toInteger(fromIndex[0]),
  );
}
