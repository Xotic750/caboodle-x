/**
 * @file List of ECMAScript white space characters.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _trimLeft
 */

import _replace from './_replace';
import _whitespace from './_whitespace';

const PRE = '^[';
const POST = ']+';
const whiteSpace = new RegExp(PRE + _whitespace() + POST);

export default function _trimLeft(string) {
  return _replace(string, whiteSpace, '');
}
