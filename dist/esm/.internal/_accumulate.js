/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _accumulate
 */
import _all from './_all';
export default function _accumulate(array, callback, initialValue) {
  var accumulator = initialValue;

  for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    rest[_key - 3] = arguments[_key];
  }

  _all.apply(void 0, [array, function _iteratee() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    accumulator = callback.apply(void 0, [accumulator].concat(args));
  }].concat(rest));

  return accumulator;
}
//# sourceMappingURL=_accumulate.js.map