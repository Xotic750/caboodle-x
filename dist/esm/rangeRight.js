/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module rangeRight
 */
import _createRange from './.internal/_createRange';

var rangeFn = _createRange(true);
/**
 * This method is like `range` except that it populates values in
 * descending order.
 *
 * @param {Array} [args] - The arguments array.
 * @param {number} [args.start=0] - The start of the range.
 * @param {number} args.end - The end of the range.
 * @param {number} [args.step=1] - The value to increment or decrement by.
 * @returns {Array} Returns the range of numbers.
 */


export default function rangeRight() {
  return rangeFn.apply(void 0, arguments);
}
//# sourceMappingURL=rangeRight.js.map