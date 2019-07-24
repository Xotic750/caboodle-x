/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module kebabJoin
 */
import _toString from './.internal/_toString';
import _map from './.internal/_map';
import _join from './.internal/_join';
export default function kebabJoin() {
  for (var _len = arguments.length, strings = new Array(_len), _key = 0; _key < _len; _key++) {
    strings[_key] = arguments[_key];
  }

  return _join(_map(strings, _toString), '-');
}
//# sourceMappingURL=kebabJoin.js.map