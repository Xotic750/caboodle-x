/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isReservedIdentifier
 */

import isReservedEs5Identifier from './isReservedEs5Identifier';
import isReservedEs6Identifier from './isReservedEs6Identifier';

export default function isReservedIdentifier(string) {
  return isReservedEs5Identifier(string) && isReservedEs6Identifier(string);
}
