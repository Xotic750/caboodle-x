/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isUniq
 */
import isArrayLike from './isArrayLike';
import _uniq from './.internal/_uniq';
export default function isUniq(array) {
  return isArrayLike(array) && _uniq(array).length === array.length;
}
//# sourceMappingURL=isUniq.js.map