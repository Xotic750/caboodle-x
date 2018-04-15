/**
 * @file Creates an array of unique values that are included in all given arrays.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module intersection
 */

import _accumulate from './.internal/_accumulate';
import _any from './.internal/_any';
import _includes from './.internal/_includes';
import _shift from './.internal/_shift';
import _push from './.internal/_push';
import requireObjectCoercible from './requireObjectCoercible';

/**
 * This method creates an array of unique values that are included in all given
 * arrays using SameValueZero for equality comparisons. The order and references
 * of result values are determined by the first array.
 *
 * @param {...Array} [arrays] - The arrays to inspect.
 * @returns {Array} Returns the new array of intersecting values.
 * @example
 * var intersection = require('array-intersection-x');
 *
 * intersection([2, 1], [2, 3]); // => [2]
 */
export default function intersection(...arrays) {
  if (!arrays.length) {
    return [];
  }

  return _accumulate(
    requireObjectCoercible(_shift(arrays)),
    (acc, value) => {
      const isExcluded = !_any(
        arrays,
        array => !_includes(requireObjectCoercible(array), value),
      );

      if (isExcluded && !_includes(acc, value)) {
        _push(acc, value);
      }

      return acc;
    },
    [],
  );
}
