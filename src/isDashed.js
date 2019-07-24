/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isDashed
 */

import isString from 'is-string';
import _stringTest from './.internal/_stringTest';

export default function isDashed(string) {
  return isString(string) && _stringTest(string, '-');
}
