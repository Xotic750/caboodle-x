/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module surround
 */

import toStr from './toString';

export default function surround(string, wrapper) {
  const wrap = toStr(wrapper);

  return wrap + toStr(string) + wrap;
}
