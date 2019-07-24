/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isValidHtml4Id
 */

import isString from 'is-string';
import _stringTest from './.internal/_stringTest';

const validPattern = /^[A-Za-z][A-Za-z0-9\-_.]*$/;

export default function isValidHtml4Id(string) {
  return isString(string) && _stringTest(string, validPattern);
}
