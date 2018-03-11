/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isUnderscored
 */

import isString from 'is-string';
import stringIncludes from './stringTest';

export default function isUnderscored(string) {
  return isString(string) && stringIncludes(string, '_');
}
