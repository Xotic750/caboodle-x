/**
 * @file Creates an array of unique values that are included in all given arrays.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module intersection
 */

import _sift from './.internal/_sift';
import _accumulate from './.internal/_accumulate';
import _any from './.internal/_any';
import _includes from './.internal/_includes';
import isNil from './isNil';
import _shift from './.internal/_shift';
import _push from './.internal/_push';
import requireObjectCoercible from './requireObjectCoercible';

const isNotNil = function _isNotNil(value) {
  return !isNil(value);
};

/**
 * This method creates an array of unique values that are included in all given
 * arrays using SameValueZero for equality comparisons. The order and references
 * of result values are determined by the first array.
 *
 * @param {...Array} [arrays] - The arrays to inspect.
 * @returns {Array} Returns the new array of intersecting values.
 */
export default function intersection(...arrays) {
  const remaining = _sift(requireObjectCoercible(arrays), isNotNil);

  if (remaining.length < 1) {
    return [];
  }

  return _accumulate(
    _shift(remaining),
    (acc, value) => {
      const isExcluded = !_any(remaining, (array) => !_includes(requireObjectCoercible(array), value));

      if (isExcluded && !_includes(acc, value)) {
        _push(acc, value);
      }

      return acc;
    },
    [],
  );
}
