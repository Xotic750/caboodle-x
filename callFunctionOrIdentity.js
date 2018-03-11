/**
 * @file Utility to invoke a function and return the result or return the identity argument unchanged.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module callFunctionOrIdentity
 */

import apply from './.internal/apply';
import isFunctionType from './isFunctionType';
import slice from './slice';

/**
 * Invoke a function and return the result or return the identity argument unchanged.
 *
 * @param {Function|*} fnOrValue - The function to invoke or any other value.
 * @param {Array} [argsArray=[]] - The argument(s) to use when invoking a given function.
 * @param {*} [thisArg=undefined] - The context to use when invoking a given function.
 * @returns {*} The result of the invoked function or the identity argument unchanged.
 */

export default function callFunctionOrIdentity(fnOrValue, argsArray, thisArg) {
  return isFunctionType(fnOrValue) ? apply(fnOrValue, thisArg, slice(argsArray)) : fnOrValue;
}
