/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module partial
 */
import _assertIsFunction from './.internal/_assertIsFunction';
import _partial from './.internal/_partial';
export default function partial(fn) {
  for (var _len = arguments.length, partials = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    partials[_key - 1] = arguments[_key];
  }

  return _partial.apply(void 0, [_assertIsFunction(fn)].concat(partials));
}
//# sourceMappingURL=partial.js.map