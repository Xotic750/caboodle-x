/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isValidEs5Identifier
 */

import isString from 'is-string';
import es5IdentifierRx from './es5IdentifierRx';
import stringIncludes from './stringTest';

export default function isValidEs5Identifier(string) {
  return isString(string) && stringIncludes(string, es5IdentifierRx);
}
