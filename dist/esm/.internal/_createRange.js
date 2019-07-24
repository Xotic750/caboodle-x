/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _createRange
 */
import _range from './_range';
import toFinite from '../toFinite';

var getInterval = function _getInterval(from, to) {
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
  return function boundRange() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var argsLength = args.length;
    var start = args[0],
        end = args[1],
        step = args[2]; // Ensure the sign of `-0` is preserved.

    var from = toFinite(start);
    var to;

    if (argsLength < 2) {
      to = from;
      from = 0;
    } else {
      to = toFinite(end);
    }

    var interval = argsLength < 3 ? getInterval(from, to) : toFinite(step);
    return _range(from, to, interval, fromRight);
  };
}
//# sourceMappingURL=_createRange.js.map