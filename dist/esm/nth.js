/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module nth
 */
import requireObjectCoercible from './requireObjectCoercible';
import _nth from './.internal/_nth';
export default function nth(array) {
  for (var _len = arguments.length, position = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    position[_key - 1] = arguments[_key];
  }

  return _nth.apply(void 0, [requireObjectCoercible(array)].concat(position));
}
//# sourceMappingURL=nth.js.map