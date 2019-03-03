/**
 * @file Utility to test if a comparate exists in a list of comparates, return comparate or supply a fallback.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module drop
 */

import isString from 'is-string';
import isArrayLike from './isArrayLike';
import requireObjectCoercible from './requireObjectCoercible';
import toWholeNumber from './toWholeNumber';
import _slice from './.internal/_slice';
import _stringSlice from './.internal/_stringSlice';

export default function drop(array, ...fromIndex) {
  if (!isArrayLike(requireObjectCoercible(array))) {
    /* eslint-disable-next-line no-void */
    return void 0;
  }

  const start = fromIndex.length ? toWholeNumber(fromIndex[0]) : 1;

  return (isString(array) ? _stringSlice : _slice)(array, start);
}
