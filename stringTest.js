/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module stringTest
 */

import isRegex from './isRegex';
import _stringTest from './.internal/_stringTest';
import requireCoercibleToString from './requireCoercibleToString';

export default function stringTest(string, patternOrRegex) {
  return _stringTest(
    requireCoercibleToString(string),
    isRegex(patternOrRegex) ? patternOrRegex : requireCoercibleToString(patternOrRegex),
  );
}
