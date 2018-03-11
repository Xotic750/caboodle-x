/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isReservedEs6Identifier
 */

import isString from 'is-string';
import es6ReservedNamesRx from './es6ReservedNamesRx';
import stringIncludes from './stringTest';

export default function isReservedEs6Identifier(string) {
  return isString(string) && stringIncludes(string, es6ReservedNamesRx);
}
