/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module all
 */

import assertIsFunction from './assertIsFunction';
import requireObjectCoercible from './requireObjectCoercible';
import toInteger from './toInteger';
import _all from './.internal/_all';

export default function all(array, callback, ...fromIndex) {
  _all(
    requireObjectCoercible(array),
    assertIsFunction(callback),
    toInteger(fromIndex[0]),
  );
}
