/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isValidHtml5Id
 */
import isString from 'is-string';
import isSpaced from './isSpaced';
export default function isValidHtml5Id(string) {
  return isString(string) && string.length > 0 && !isSpaced(string);
}
//# sourceMappingURL=isValidHtml5Id.js.map