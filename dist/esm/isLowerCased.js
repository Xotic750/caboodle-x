/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isLowerCased
 */
import isString from 'is-string';
import _toLowerCase from './.internal/_toLowerCase';
import _toString from './.internal/_toString';
export default function isLowerCased(string) {
  return isString(string) && _toLowerCase(string) === _toString(string);
}
//# sourceMappingURL=isLowerCased.js.map