/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _accumulate
 */

import _all from './_all';

export default function _accumulate(array, callback, initialValue, ...rest) {
  let accumulator = initialValue;

  _all(
    array,
    function _iteratee(...args) {
      accumulator = callback(accumulator, ...args);
    },
    ...rest,
  );

  return accumulator;
}
