/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module bind
 */
import _assertIsFunction from './.internal/_assertIsFunction';
import _bind from './.internal/_bind';
export default function bind(fn) {
  for (var _len = arguments.length, bindArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    bindArgs[_key - 1] = arguments[_key];
  }

  return _bind.apply(void 0, [_assertIsFunction(fn)].concat(bindArgs));
}
//# sourceMappingURL=bind.js.map