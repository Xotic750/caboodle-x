/**
 * @file Utility to test if a comparate exists in a list of comparates, return comparate or supply a fallback.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _uniSlice
 */

import isString from 'is-string';
import _slice from './_slice';
import _stringSlice from './_stringSlice';

export default function _uniSlice(arrayLike, ...rest) {
  return (isString(arrayLike) ? _stringSlice : _slice)(arrayLike, ...rest);
}
