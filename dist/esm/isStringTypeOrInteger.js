/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isStringTypeOrInteger
 */
import isSafeInteger from './isSafeInteger';
import isStringType from './isStringType';
export default function isStringTypeOrInteger(value) {
  return isStringType(value) || isSafeInteger(value);
}
//# sourceMappingURL=isStringTypeOrInteger.js.map