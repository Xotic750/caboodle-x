/**
 * @file Utility to invoke a function and return the result or return the identity argument unchanged.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module callFunctionOrIdentity
 */

import _apply from './.internal/_apply';
import assertIsObject from './assertIsObjectLike';
import _isFunction from './.internal/_isFunction';
import _slice from './.internal/_slice';
import isNil from './isNil';

const requireIsObject = function _requireIsObject(value) {
  return assertIsObject(value, 'CreateListFromArrayLike called on non-object');
};

const getArgsArray = function _getArgsArray(value) {
  return isNil(value) ? [] : _slice(requireIsObject(value));
};

/**
 * Invoke a function and return the result or return the identity argument unchanged.
 *
 * @param {Function|*} fnOrValue - The function to invoke or any other value.
 * @param {Array} rest - The remaining arguments.
 * @param {Array} [rest.argsArray=[]] - The argument(s) to use when invoking a given function.
 * @param {*} [rest.thisArg=undefined] - The context to use when invoking a given function.
 * @returns {*} The result of the invoked function or the identity argument unchanged.
 */
export default function callFunctionOrIdentity(fnOrValue, ...rest) {
  if (_isFunction(fnOrValue)) {
    const argsArray = getArgsArray(rest[0]);

    return rest.length > 1 ? _apply(fnOrValue, rest[1], argsArray) : fnOrValue(...argsArray);
  }

  return fnOrValue;
}
