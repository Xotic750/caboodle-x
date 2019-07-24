/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _toString
 */
import isSymbol from 'is-symbol';
import _String from './_String';
export default function _toString(value) {
  if (isSymbol(value)) {
    throw new TypeError('Cannot convert a Symbol value to a string');
  }

  return _String(value);
}
//# sourceMappingURL=_toString.js.map