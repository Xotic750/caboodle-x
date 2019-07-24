/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module call
 */
import _assertIsFunction from './.internal/_assertIsFunction';
import _call from './.internal/_call';
export default function call(fn) {
  for (var _len = arguments.length, callArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    callArgs[_key - 1] = arguments[_key];
  }

  return _call.apply(void 0, [_assertIsFunction(fn)].concat(callArgs));
}
//# sourceMappingURL=call.js.map