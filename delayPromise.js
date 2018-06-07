/**
 * @file Utility that creates a delayed promise.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module delayPromise
 */

import _setTimeout from './.internal/_setTimeout';
import constant from './constant';
import toWholeNumber from './toWholeNumber';

/**
 * Create a delayed promise.
 *
 * @param {number|string} milliseconds - The number of milliseconds to delay by.
 * @param {*} [value] - The value to be resolved with.
 * @returns {Promise} The delayed promise.
 */
export default function delayPromise(milliseconds, ...value) {
  const ms = toWholeNumber(milliseconds);

  if (value.length) {
    const valueExecutor = function _valueExecutor(arg) {
      return delayPromise(ms).then(constant(arg));
    };

    return Promise.resolve(value[0]).then(valueExecutor);
  }

  const timeoutExecutor = function _timeoutExecutor(resolve, reject) {
    /* istanbul ignore next */
    try {
      _setTimeout(resolve, ms);
    } catch (error) {
      reject(error);
    }
  };

  return new Promise(timeoutExecutor);
}
