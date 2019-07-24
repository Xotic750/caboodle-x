/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _any
 */
import _fromIndex from './_fromIndex';
import toObject from '../toObject';
import toWholeNumber from '../toWholeNumber';
export default function _any(array, callback) {
  var object = toObject(array);
  var length = toWholeNumber(object.length);

  if (length) {
    for (var index = _fromIndex(object, arguments.length <= 2 ? undefined : arguments[2]); index < length; index += 1) {
      if (callback(object[index], index, object)) {
        return true;
      }
    }
  }

  return false;
}
//# sourceMappingURL=_any.js.map