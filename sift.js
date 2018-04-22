/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module sift
 */

import assertIsFunction from './assertIsFunction';
import requireObjectCoercible from './requireObjectCoercible';
import _sift from './.internal/_sift';
import toInteger from './toInteger';

export default function sift(array, callback, ...fromIndex) {
  return _sift(
    requireObjectCoercible(array),
    assertIsFunction(callback),
    toInteger(fromIndex[0]),
  );
}
