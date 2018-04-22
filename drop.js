/**
 * @file Utility to test if a comparate exists in a list of comparates, return comparate or supply a fallback.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module drop
 */

import _uniSlice from './.internal/_uniSlice';
import isArrayLike from './isArrayLike';
import requireObjectCoercible from './requireObjectCoercible';
import toWholeNumber from './toWholeNumber';

export default function drop(array, ...fromIndex) {
  if (!isArrayLike(requireObjectCoercible(array))) {
    return void 0;
  }

  const start = fromIndex.length ? toWholeNumber(fromIndex[0]) : 1;

  return _uniSlice(array, start);
}
