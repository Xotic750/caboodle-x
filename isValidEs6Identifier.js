/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isValidEs6Identifier
 */

import isString from 'is-string';
import es6IdentifierRx from './es6IdentifierRx';
import stringIncludes from './stringTest';

export default function isValidEs6Identifier(string) {
  return isString(string) && stringIncludes(string, es6IdentifierRx);
}
