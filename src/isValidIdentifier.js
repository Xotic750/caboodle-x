/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isValidIdentifier
 */

import isStringType from 'src/isStringType';
import isValidEs5Identifier from 'src/isValidEs5Identifier';
import isValidEs6Identifier from 'src/isValidEs6Identifier';

export default function isValidIdentifier(value) {
  return isStringType(value) && isValidEs5Identifier(value) && isValidEs6Identifier(value);
}
