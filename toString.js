/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module toString
 */

import isSymbol from 'is-symbol';
import _String from './.internal/_String';

export default function toString(value) {
  if (isSymbol(value)) {
    throw new TypeError('Cannot convert a Symbol value to a string');
  }

  return _String(value);
}
