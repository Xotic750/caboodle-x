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
 * @returns {object} Returns an object of the result.
 */
export default function attempt(fn, ...rest) {
  try {
    return {
      threw: false,
      /* eslint-disable-next-line babel/no-invalid-this */
      value: _apply(fn, this, rest),
    };
  } catch (e) {
    return {
      threw: true,
      value: e,
    };
  }
}
