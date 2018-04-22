/**
 * @file Utility that creates a delayed promise.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module delayPromise
 */

import attempt from './attempt';
import _setTimeout from './.internal/_setTimeout';
import constant from './constant';
import toWholeNumber from './toWholeNumber';

const onTimeout = function _onTimeout(resolve, reject) {
  const result = attempt(resolve);

  /* istanbul ignore next */
  if (result.threw) {
    reject(result.value);
  }
};

/**
 * Create a delayed promise.
 *
 * @param {number|string} milliseconds - The number of milliseconds to delay by.
 * @param {*} [value] - The value to be resolved with.
 * @returns {Promise} The delayed promise.
 */
export default function delayPromise(milliseconds, ...value) {
  const ms = toWholeNumber(milliseconds);

  return value.length
    ? delayPromise(ms).then(constant(value[0]))
    : new Promise(function _executor(resolve, reject) {
        const result = attempt(_setTimeout, onTimeout, ms, resolve, reject);

        /* istanbul ignore next */
        if (result.threw) {
          reject(result.value);
        }
      });
}
