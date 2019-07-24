/**
 * @file Trims and replaces sequences of whitespace characters by a single space.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _normalizeSpace
 */
import _trim from './_trim';
import _whitespace from './_whitespace';
import _replace from './_replace';
var PRE = '[';
var POST = ']+';
var whiteSpace = new RegExp(PRE + _whitespace() + POST, 'g');
export default function _normalizeSpace(string) {
  return _replace(_trim(string), whiteSpace, ' ');
}
//# sourceMappingURL=_normalizeSpace.js.map