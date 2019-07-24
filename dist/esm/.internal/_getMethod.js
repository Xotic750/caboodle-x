/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _getMethod
 */
import isNil from '../isNil';
import isFunction from '../isFunction';
export default function _getMethod(object, property) {
  var func = object[property];

  if (!isNil(func)) {
    if (!isFunction(func)) {
      throw new TypeError("".concat(func, " returned for property ").concat(property, " of object ").concat(object, " is not a function"));
    }

    return func;
  }

  return void 0;
}
//# sourceMappingURL=_getMethod.js.map