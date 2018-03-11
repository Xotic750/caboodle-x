/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module surround
 */

import toString from './.internal/toString';

export default function surround(string, wrapper) {
  const wrap = toString(wrapper);

  return wrap + toString(string) + wrap;
}
