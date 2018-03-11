/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isHex
 */

import isString from 'is-string';
import stringIncludes from './stringTest';

const invalidHexLiteral = /^0x[0-9a-f]+$/i;

export default function isHex(string) {
  return isString(string) && stringIncludes(string, invalidHexLiteral);
}
