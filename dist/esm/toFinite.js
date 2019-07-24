/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module toFinite
 */
import INFINITY from './.internal/_Infinity';
import isNumberNaN from './isNumberNaN';
import sign from './sign';
import toNumber from './toNumber';
var MAX_INTEGER = 1.7976931348623157e308;
export default function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }

  var number = toNumber(value);

  if (number === INFINITY || number === -INFINITY) {
    return sign(number) * MAX_INTEGER;
  }

  return isNumberNaN(number) ? 0 : number;
}
//# sourceMappingURL=toFinite.js.map