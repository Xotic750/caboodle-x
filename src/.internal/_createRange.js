/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _createRange
 */

import _range from './_range';
import toFinite from '../toFinite';

const getInterval = function _getInterval(from, to) {
  return from < to ? 1 : -1;
};

/**
 * Creates a `range` or `rangeRight` function.
 *
 * @private
 * @param {boolean} [fromRight] - Specify iterating from right to left.
 * @returns {Function} Returns the new range function.
 */
export default function _createRange(fromRight) {
  return function boundRange(...args) {
    const argsLength = args.length;
    const [start, end, step] = args;

    // Ensure the sign of `-0` is preserved.
    let from = toFinite(start);
    let to;

    if (argsLength < 2) {
      to = from;
      from = 0;
    } else {
      to = toFinite(end);
    }

    const interval = argsLength < 3 ? getInterval(from, to) : toFinite(step);

    return _range(from, to, interval, fromRight);
  };
}
