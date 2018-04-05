/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isHex
 */

import isString from 'is-string';
import _stringTest from './.internal/_stringTest';

const hexPattern = /^0x[0-9a-f]+$/i;

export default function isHex(string) {
  return isString(string) && _stringTest(string, hexPattern);
}
