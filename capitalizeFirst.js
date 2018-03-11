/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module capitalizeFirst
 */

import toUpperCase from './.internal/toUpperCase';
import charAt from './.internal/charAt';
import stringSlice from './.internal/stringSlice';
import toString from './.internal/toString';

export default function capitalizeFirst(string) {
  const str = toString(string);

  return toUpperCase(charAt(str, 0)) + stringSlice(str, 1);
}
