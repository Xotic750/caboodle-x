/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isSpaced
 */

import isString from 'is-string';
import stringIncludes from './stringTest';

export default function isSpaced(string) {
  return isString(string) && stringIncludes(string, ' ');
}
