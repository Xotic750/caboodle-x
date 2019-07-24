/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _getMethod
 */

import isNil from '../isNil';
import isFunction from '../isFunction';

export default function _getMethod(object, property) {
  const func = object[property];
  if (!isNil(func)) {
    if (!isFunction(func)) {
      throw new TypeError(
        `${func} returned for property ${property} of object ${object} is not a function`,
      );
    }

    return func;
  }

  return void 0;
}
