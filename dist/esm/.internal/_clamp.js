/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _clamp
 */
import _isNaN from './_isNaN';
import _NaN from './_NaN';
var max = Math.max,
    min = Math.min;
export default function _clamp(value, lower, upper) {
  if (_isNaN(value) || _isNaN(lower) || _isNaN(upper)) {
    return _NaN;
  }

  return min(max(value, lower), upper);
}
//# sourceMappingURL=_clamp.js.map