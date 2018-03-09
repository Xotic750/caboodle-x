/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isOctal
 */

import isStringType from 'src/isStringType';

const octalRegex = /^0o[0-7]+$/i;

export default function isOctal(value) {
  return isStringType(value) && octalRegex.test(value);
}
