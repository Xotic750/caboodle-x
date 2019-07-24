/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _find
 */
import _any from './_any';
export default function _find(array, callback) {
  var result = {
    includes: false,
    index: -1,

    /* eslint-disable-next-line no-void */
    value: void 0
  };

  var predicate = function _predicate(value, index, object) {
    var found = callback(value, index, object);

    if (found) {
      result.includes = true;
      result.index = index;
      result.value = value;
    }

    return found;
  };

  for (var _len = arguments.length, fromIndex = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    fromIndex[_key - 2] = arguments[_key];
  }

  _any.apply(void 0, [array, predicate].concat(fromIndex));

  return result;
}
//# sourceMappingURL=_find.js.map