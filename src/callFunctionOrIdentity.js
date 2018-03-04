/**
 * @file Utility to invoke a function and return the result or return the identity argument unchanged.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module callFunctionOrIdentity
 */

import ES from 'es-abstract';
import arrayOrWrapInArray from 'src/arrayOrWrapInArray';

/**
 * Invoke a function and return the result or return the identity argument unchanged.
 *
 * @param {Array} args - The arguments array.
 * @param {Function|*} args.fnOrValue - The function to invoke or any other value.
 * @param {Array|*} [args.argsArray=[]] - The argument(s) to use when invoking a given function.
 * @param {*} [args.thisArg=undefined] - The context to use when invoking a given function.
 * @returns {*} The result of the invoked function or the identity argument unchanged.
 */
export default function callFunctionOrIdentity(...args) {
  const [fnOrValue, argsArray, thisArg] = args;

  if (ES.IsCallable(fnOrValue)) {
    const {
      length,
    } = args;

    const array = length > 1 ? arrayOrWrapInArray(argsArray) : [];

    return length < 2 ? fnOrValue(...array) : fnOrValue.apply(thisArg, array);
  }

  return fnOrValue;
}
