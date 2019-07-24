/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module nilifyIs
 */
import _assertIsFunction from './.internal/_assertIsFunction';
import _call from './.internal/_call';
import isNil from './isNil';
export default function nilifyIs(predicate) {
  _assertIsFunction(predicate);

  return function nilifiedBound(value) {
    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    /* eslint-disable-next-line babel/no-invalid-this */
    return isNil(value) || _call.apply(void 0, [predicate, this, value].concat(rest));
  };
}
//# sourceMappingURL=nilifyIs.js.map