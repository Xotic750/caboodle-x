/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module capitalizeFirst
 */

import _charAt from './.internal/_charAt';
import _stringSlice from './.internal/_stringSlice';
import _toString from './.internal/_toString';
import _toUpperCase from './.internal/_toUpperCase';

export default function capitalizeFirst(string) {
  const str = _toString(string);

  return _toUpperCase(_charAt(str, 0)) + _stringSlice(str, 1);
}
