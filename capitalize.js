/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module capitalize
 */

import _charAt from './.internal/_charAt';
import _stringSlice from './.internal/_stringSlice';
import toStr from './toString';
import _toLowerCase from './.internal/_toLowerCase';
import _toUpperCase from './.internal/_toUpperCase';

export default function capitalize(string) {
  const str = toStr(string);

  return _toUpperCase(_charAt(str, 0)) + _toLowerCase(_stringSlice(str, 1));
}
