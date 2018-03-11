/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isOctal
 */

import isString from 'is-string';
import stringIncludes from './stringTest';

const octalRegex = /^0o[0-7]+$/i;

export default function isOctal(string) {
  return isString(string) && stringIncludes(string, octalRegex);
}
