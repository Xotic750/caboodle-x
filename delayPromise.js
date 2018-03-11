/**
 * @file Utility that creates a delayed promise.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module delayPromise
 */

import MAX_SAFE_INTEGER from './.internal/maxSafeInteger';
import toNumber from './.internal/toNumber';
import clamp from './clamp';
import constant from './constant';

/**
 * Create a delayed promise.
 *
 * @param {number|string} milliseconds - The number of milliseconds to delay by.
 * @param {*} [value] - The value to be resolved with.
 * @returns {Promise} The delayed promise.
 */
export default function delayPromise(milliseconds, ...value) {
  const ms = clamp(toNumber(milliseconds), MAX_SAFE_INTEGER);

  if (value.length > 0) {
    return Promise.resolve(value[0]).then(arg => delayPromise(ms).then(constant(arg)));
  }

  return new Promise(((resolve, reject) => {
    try {
      setTimeout(resolve, ms);
    } catch (error) {
      reject(error);
    }
  }));
}
