/**
 * @file Utility to test if a comparate exists in a list of comparates, return comparate or supply a fallback.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _getAt
 */
import isString from 'is-string';
import _toInteger from './_toInteger';
import isArrayLike from '../isArrayLike';
import _charAt from './_charAt';
export default function _getAt(array) {
  if (!isArrayLike(array)) {
    return void 0;
  }

  var index = (arguments.length <= 1 ? 0 : arguments.length - 1) ? _toInteger(arguments.length <= 1 ? undefined : arguments[1]) : 0;
  return isString(array) ? _charAt(array, index) : array[index];
}
//# sourceMappingURL=_getAt.js.map