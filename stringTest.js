/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module stringIncludes
 */

import isRegex from 'is-regex';
import toString from './.internal/toString';
import regexpTest from './.internal/regexpTest';
import stringIncludes from './.internal/stringIncludes';

export default function stringTest(string, patternOrRegex) {
  const str = toString(string);

  return isRegex(patternOrRegex) ?
    regexpTest(patternOrRegex, str) :
    stringIncludes(str, patternOrRegex);
}
