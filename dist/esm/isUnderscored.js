/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isUnderscored
 */
import isString from 'is-string';
import _stringTest from './.internal/_stringTest';
export default function isUnderscored(string) {
  return isString(string) && _stringTest(string, '_');
}
//# sourceMappingURL=isUnderscored.js.map