/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isBinary
 */

import isString from 'is-string';
import stringIncludes from './stringTest';

const binaryRegex = /^0b[01]+$/i;

export default function isBinary(string) {
  return isString(string) && stringIncludes(string, binaryRegex);
}
