/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module kebabJoin
 */

import toStr from './toString';
import _map from './.internal/_map';
import _join from './.internal/_join';

export default function kebabJoin(...strings) {
  return _join(_map(strings, toStr), '-');
}
