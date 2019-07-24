/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module apply
 */
import _assertIsFunction from './.internal/_assertIsFunction';
import _apply from './.internal/_apply';
export default function apply(fn) {
  for (var _len = arguments.length, applyArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    applyArgs[_key - 1] = arguments[_key];
  }

  return _apply.apply(void 0, [_assertIsFunction(fn)].concat(applyArgs));
}
//# sourceMappingURL=apply.js.map