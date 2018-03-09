/**
 * @file Utility that creates a delayed promise.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module delayPromise
 */

import clamp from 'src/clamp';
import constant from 'src/constant';

/**
 * Create a delayed promise.
 *
 * @param {Array} args - The arguments array.
 * @param {number|string} args.milliseconds - The number of milliseconds to delay by.
 * @param {*} [args.value] - The value to be resolved with.
 * @returns {Promise} The delayed promise.
 */
export default function delayPromise(...args) {
  const [milliseconds, value] = args;
  const ms = clamp(+milliseconds, Number.MAX_SAFE_INTEGER);

  if (args.length > 1) {
    const afterValue = function _afterValue(arg) {
      return delayPromise(ms).then(constant(arg));
    };

    return Promise.resolve(value).then(afterValue);
  }

  const delay = function _delay(resolve, reject) {
    try {
      setTimeout(resolve, ms);
    } catch (error) {
      reject(error);
    }
  };

  return new Promise(delay);
}
