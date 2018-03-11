/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isReservedEs5Identifier
 */

import isString from 'is-string';
import es5ReservedNamesRx from './es5ReservedNamesRx';
import stringIncludes from './stringTest';

export default function isReservedEs5Identifier(string) {
  return isString(string) && stringIncludes(string, es5ReservedNamesRx);
}
