/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isCountingNumber
 */
import isWholeNumber from './isWholeNumber';
export default function isCountingNumber(value) {
  return isWholeNumber(value) && value > 0;
}
//# sourceMappingURL=isCountingNumber.js.map