/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isOctal
 */

import isString from 'is-string';
import _stringTest from './.internal/_stringTest';

const octalPattern = /^0o[0-7]+$/i;

export default function isOctal(string) {
  return isString(string) && _stringTest(string, octalPattern);
}
