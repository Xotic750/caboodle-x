/**
 * @file Invokes function, returning an object of the results.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module attempt
 */

import _apply from './.internal/_apply';

/**
 * This method attempts to invoke the function, returning either the result or
 * the caught error object. Any additional arguments are provided to the
 * function when it's invoked.
 *
 * @param {Function} fn - The function to attempt.
 * @param {...*} [rest] - The arguments to invoke the function with.
 * @returns {Object} Returns an object of the result.
 * @example
 * var attempt = require('attempt-x');
 *
 * function thrower() {
 *   throw new Error('Threw');
 * }
 *
 * attempt(thrower, 1, 2);
 * // {
 * //   threw: true,
 * //   value: // Error('Threw') object
 * // }
 *
 * function sumArgs(a, b) {
 *   return a + b;
 * }
 *
 * attempt(sumArgs, 1, 2);
 * // {
 * //   threw: false,
 * //   value: 3
 * // }
 *
 * var thisArg = [];
 * function pusher(a, b) {
 *   return this.push(a, b);
 * }
 *
 * attempt.call(thisArg, pusher, 1, 2);
 * // {
 * //   threw: false,
 * //   value: 2
 * // }
 * // thisArg => [1, 2];
 */
export default function attempt(fn, ...rest) {
  try {
    return {
      threw: false,
      value: _apply(fn, this, rest),
    };
  } catch (e) {
    return {
      threw: true,
      value: e,
    };
  }
}
