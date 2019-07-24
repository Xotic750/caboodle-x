/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _sift
 */
import _any from './_any';
import _push from './_push';
export default function _sift(array, callback) {
  var result = [];

  var iteratee = function _iteratee(value) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    if (callback.apply(void 0, [value].concat(args))) {
      _push(result, value);
    }
  };

  for (var _len = arguments.length, fromIndex = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    fromIndex[_key - 2] = arguments[_key];
  }

  _any.apply(void 0, [array, iteratee].concat(fromIndex));

  return result;
}
//# sourceMappingURL=_sift.js.map