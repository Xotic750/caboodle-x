/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _all
 */

import _any from './_any';

export default function _all(array, callback, ...rest) {
  const iteratee = function _iteratee(...args) {
    callback(...args);
  };

  _any(array, iteratee, ...rest);
}
