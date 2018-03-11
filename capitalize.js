/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module capitalize
 */

import toUpperCase from './.internal/toUpperCase';
import toLowerCase from './.internal/toLowerCase';
import charAt from './.internal/charAt';
import stringSlice from './.internal/stringSlice';
import toString from './.internal/toString';

export default function capitalize(string) {
  const str = toString(string);

  return toUpperCase(charAt(str, 0)) + toLowerCase(stringSlice(str, 1));
}
