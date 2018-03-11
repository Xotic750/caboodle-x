/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module kebabJoin
 */

import arrayMap from './.internal/arrayMap';
import toString from './.internal/toString';
import join from './.internal/join';

export default function kebabJoin(...strings) {
  return join(arrayMap(strings, toString), '-');
}
