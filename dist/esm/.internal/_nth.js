/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _nth
 */
import isString from 'is-string';
import toInteger from '../toInteger';
import isArrayLike from '../isArrayLike';
import _charAt from './_charAt';
export default function _nth(array) {
  if (!isArrayLike(array)) {
    return void 0;
  }

  var index = (arguments.length <= 1 ? 0 : arguments.length - 1) ? toInteger(arguments.length <= 1 ? undefined : arguments[1]) : 0;
  return isString(array) ? _charAt(array, index) : array[index];
}
//# sourceMappingURL=_nth.js.map