/**
 * @file Utility to test if a comparate exists in a list of comparates, return comparate or supply a fallback.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _uniSlice
 */
import isString from 'is-string';
import _slice from './_slice';
import _stringSlice from './_stringSlice';
export default function _uniSlice(arrayLike) {
  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  return (isString(arrayLike) ? _stringSlice : _slice).apply(void 0, [arrayLike].concat(rest));
}
//# sourceMappingURL=_uniSlice.js.map