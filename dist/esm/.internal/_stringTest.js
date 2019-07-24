/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _stringTest
 */
import isRegex from '../isRegex';
import _stringIndexOf from './_stringIndexOf';
import _test from './_test';
export default function _stringTest(string, searchValue) {
  return isRegex(searchValue) ? _test(searchValue, string) : _stringIndexOf(string, searchValue) !== -1;
}
//# sourceMappingURL=_stringTest.js.map