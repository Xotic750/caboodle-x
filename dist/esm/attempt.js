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

export default function attempt(fn) {
  try {
    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    return {
      threw: false,

      /* eslint-disable-next-line babel/no-invalid-this */
      value: _apply(fn, this, rest)
    };
  } catch (e) {
    return {
      threw: true,
      value: e
    };
  }
}
//# sourceMappingURL=attempt.js.map