/**
 * @file Utility to test if a comparate exists in a list of comparates, return comparate or supply a fallback.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module getAt
 */
import requireObjectCoercible from './requireObjectCoercible';
import _getAt from './.internal/_getAt';
export default function getAt(array) {
  for (var _len = arguments.length, position = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    position[_key - 1] = arguments[_key];
  }

  return _getAt.apply(void 0, [requireObjectCoercible(array)].concat(position));
}
//# sourceMappingURL=getAt.js.map