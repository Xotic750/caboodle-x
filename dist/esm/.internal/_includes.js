/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _includes
 */
import _find from './_find';
import sameValueZero from '../sameValueZero';
export default function _includes(array, searchElement) {
  var isSameValueZero = function _isSameValueZero(value) {
    return sameValueZero(searchElement, value);
  };

  for (var _len = arguments.length, fromIndex = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    fromIndex[_key - 2] = arguments[_key];
  }

  return _find.apply(void 0, [array, isSameValueZero].concat(fromIndex)).includes;
}
//# sourceMappingURL=_includes.js.map