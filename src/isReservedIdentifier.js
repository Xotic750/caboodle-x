/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isReservedIdentifier
 */

import isStringType from 'src/isStringType';
import isReservedEs5Identifier from 'src/isReservedEs5Identifier';
import isReservedEs6Identifier from 'src/isReservedEs6Identifier';

export default function isReservedIdentifier(value) {
  return isStringType(value) && isReservedEs5Identifier(value) && isReservedEs6Identifier(value);
}
