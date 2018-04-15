/**
 * @file Creates an array of array values not included in the other given arrays.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module difference
 */

import _sift from './.internal/_sift';
import _any from './.internal/_any';
import _all from './.internal/_all';
import _includes from './.internal/_includes';
import requireObjectCoercible from './requireObjectCoercible';

/**
 * This method creates an array of array values not included in the other given
 * arrays using SameValueZero for equality comparisons. The order and references
 * of result values are determined by the first array.
 *
 * @param {Array} array - The array to inspect.
 * @throws {TypeError} If array is null or undefined.
 * @param {Array.<Array>} [excludes] - The values to exclude.
 * @throws {TypeError} If any excludes value is null or undefined.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 * var difference = require('array-difference-x');
 *
 * difference([2, 1], [2, 3]); // => [1]
 */
export default function difference(array, ...excludes) {
  requireObjectCoercible(array);

  _all(excludes, requireObjectCoercible);

  return _sift(array, function _siftPredicate(value) {
    return !_any(excludes, function _includesPredicate(exclude) {
      return _includes(exclude, value);
    });
  });
}
