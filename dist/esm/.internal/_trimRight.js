/**
 * @file List of ECMAScript white space characters.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _trimRight
 */
import _replace from './_replace';
import _whitespace from './_whitespace';
var PRE = '[';
var POST = ']+$';
var whiteSpace = new RegExp(PRE + _whitespace() + POST);
export default function _trimRight(string) {
  return _replace(string, whiteSpace, '');
}
//# sourceMappingURL=_trimRight.js.map