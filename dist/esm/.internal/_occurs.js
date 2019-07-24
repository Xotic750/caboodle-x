/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _occurs
 */
import sameValueZero from '../sameValueZero';
import _find from './_find';
export default function _occurs(array, value) {
  return _find(array, function _predicate(item) {
    return sameValueZero(value, item);
  });
}
//# sourceMappingURL=_occurs.js.map