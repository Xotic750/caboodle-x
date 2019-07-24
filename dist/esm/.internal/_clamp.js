/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _clamp
 */
import isNumberNaN from '../isNumberNaN';
import _NaN from './_NaN';
var max = Math.max,
    min = Math.min;
export default function _clamp(value, lower, upper) {
  if (isNumberNaN(value) || isNumberNaN(lower) || isNumberNaN(upper)) {
    return _NaN;
  }

  return min(max(value, lower), upper);
}
//# sourceMappingURL=_clamp.js.map