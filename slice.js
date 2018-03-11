/**
 * @file Utility to invoke a function and return the result or return the identity argument unchanged.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module slice
 */

import arraySlice from './.internal/arraySlice';
import isArrayLike from './isArrayLike';

export default function slice(array, ...rest) {
  return isArrayLike(array) ? arraySlice(array, ...rest) : [];
}
