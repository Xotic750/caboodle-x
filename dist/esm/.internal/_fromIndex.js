/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _fromIndex
 */
import isArrayLike from '../isArrayLike';
import toWholeNumber from '../toWholeNumber';
import toObject from '../toObject';
import _toInteger from './_toInteger';
var max = Math.max;
export default function _fromIndex(array, fromIndex) {
  var object = toObject(array);

  if (!isArrayLike(object)) {
    return 0;
  }

  var index = _toInteger(fromIndex);

  return index >= 0 ? index : max(0, toWholeNumber(object.length) + index);
}
//# sourceMappingURL=_fromIndex.js.map