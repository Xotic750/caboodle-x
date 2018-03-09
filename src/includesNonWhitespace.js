/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module includesNonWhitespace
 */

import isStringType from 'src/isStringType';

const nonWSregex = /[^\s]/;

export default function includesNonWhitespace(value) {
  return isStringType(value) && nonWSregex.test(value);
}
