/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isWhiteSpaced
 */

import isString from 'is-string';
import _stringTest from './.internal/_stringTest';
import _whitespace from './.internal/_whitespace';

const PRE = '[';
const POST = ']';
const containsWhiteSpace = new RegExp(PRE + _whitespace() + POST);

export default function isWhiteSpaced(string) {
  return isString(string) && _stringTest(string, containsWhiteSpace);
}
