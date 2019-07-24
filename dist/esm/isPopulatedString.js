/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isPopulatedString
 */
import isString from 'is-string';
import _trim from './.internal/_trim';
export default function isPopulatedString(string) {
  return isString(string) && _trim(string).length > 0;
}
//# sourceMappingURL=isPopulatedString.js.map