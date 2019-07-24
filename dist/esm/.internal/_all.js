/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _all
 */
import _any from './_any';
export default function _all(array, callback) {
  var iteratee = function _iteratee() {
    callback.apply(void 0, arguments);
  };

  for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    rest[_key - 2] = arguments[_key];
  }

  _any.apply(void 0, [array, iteratee].concat(rest));
}
//# sourceMappingURL=_all.js.map