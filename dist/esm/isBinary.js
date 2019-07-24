/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isBinary
 */
import isString from 'is-string';
import _stringTest from './.internal/_stringTest';
var binaryPattern = /^0b[01]+$/i;
export default function isBinary(string) {
  return isString(string) && _stringTest(string, binaryPattern);
}
//# sourceMappingURL=isBinary.js.map