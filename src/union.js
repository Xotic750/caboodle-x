/**
 * @file Creates an array of unique values, in order, from all given arrays.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module union
 */

import _accumulate from './.internal/_accumulate';
import _includes from './.internal/_includes';
import _push from './.internal/_push';
import requireObjectCoercible from './requireObjectCoercible';

const addNotIncluded = function _addNotIncluded(accumulator, value) {
  if (!_includes(accumulator, value)) {
    _push(accumulator, value);
  }

  return accumulator;
};

const reduceArgs = function _reduceArgs(accumulator, array) {
  return _accumulate(requireObjectCoercible(array), addNotIncluded, accumulator);
};

/**
 * This method creates an array of unique values, in order, from all given
 * arrays using SameValueZero for equality comparisons.
 *
 * @param {Array.<Array>} [arrays] - The arrays to inspect.
 * @returns {Array} Returns the new array of combined values.
 */
export default function union(...arrays) {
  return _accumulate(arrays, reduceArgs, []);
}
