/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isArrayLikeObject
 */
import isObjectLike from './isObjectLike';
import isArrayLike from './isArrayLike';
export default function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}
//# sourceMappingURL=isArrayLikeObject.js.map