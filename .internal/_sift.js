/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _sift
 */

import _any from './_any';
import _push from './_push';

export default function _sift(array, callback, ...fromIndex) {
  const result = [];

  _any(
    array,
    function _iteratee(value, ...args) {
      if (callback(value, ...args)) {
        _push(result, value);
      }
    },
    ...fromIndex,
  );

  return result;
}
