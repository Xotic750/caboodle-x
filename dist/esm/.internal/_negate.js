/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _negate
 */
import _apply from './_apply';
export default function _negate(predicate) {
  return function boundNegate() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /* eslint-disable-next-line babel/no-invalid-this */
    return !_apply(predicate, this, args);
  };
}
//# sourceMappingURL=_negate.js.map