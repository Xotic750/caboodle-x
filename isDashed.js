/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isDashed
 */

import isString from 'is-string';
import stringIncludes from './stringTest';

export default function isDashed(string) {
  return isString(string) && stringIncludes(string, '-');
}
