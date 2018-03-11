/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module includesNonWhitespace
 */

import stringIncludes from './stringTest';

const nonWSregex = /\s/;

export default function includesNonWhitespace(string) {
  return stringIncludes(string, nonWSregex);
}
