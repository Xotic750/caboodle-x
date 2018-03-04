/**
 * @file Utility that creates a delayed promise.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module delayPromise
 */

import ES from 'es-abstract';
import clamp from 'src/clamp';

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
  const ms = clamp(ES.ToNumber(milliseconds), Number.MAX_SAFE_INTEGER);
  const afterValue = arg => delayPromise(ms).then(() => arg);

  if (args.length > 1) {
    return Promise.resolve(value).then(afterValue);
  }

  return new Promise((resolve, reject) => {
    try {
      setTimeout(resolve, ms);
    } catch (error) {
      reject(error);
    }
  });
}
