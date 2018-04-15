/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module all
 */

import _assertIsFunction from './.internal/_assertIsFunction';
import requireObjectCoercible from './requireObjectCoercible';
import _toInteger from './.internal/_toInteger';
import _all from './.internal/_all';

export default function all(array, callback, ...fromIndex) {
  _all(
    requireObjectCoercible(array),
    _assertIsFunction(callback),
    _toInteger(fromIndex[0]),
  );
}
