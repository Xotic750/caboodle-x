/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _find
 */

import _any from './_any';

export default function _find(array, callback, ...fromIndex) {
  const result = {
    includes: false,
    index: -1,
    value: void 0,
  };

  const predicate = function _predicate(value, index, object) {
    const found = callback(value, index, object);

    if (found) {
      result.includes = true;
      result.index = index;
      result.value = value;
    }

    return found;
  };

  _any(array, predicate, ...fromIndex);

  return result;
}
