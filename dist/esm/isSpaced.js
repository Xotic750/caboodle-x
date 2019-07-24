/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isSpaced
 */
import isString from 'is-string';
import _stringTest from './.internal/_stringTest';
import _whitespace from './.internal/_whitespace';
var PRE = '[';
var POST = ']';
var containsSpace = new RegExp(PRE + _whitespace('html') + POST);
export default function isSpaced(string) {
  return isString(string) && _stringTest(string, containsSpace);
}
//# sourceMappingURL=isSpaced.js.map