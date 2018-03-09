/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isBinary
 */

import isStringType from 'src/isStringType';

const binaryRegex = /^0b[01]+$/i;

export default function isBinary(value) {
  return isStringType(value) && binaryRegex.test(value);
}
