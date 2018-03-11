/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isValidIdentifier
 */

import isValidEs5Identifier from './isValidEs5Identifier';
import isValidEs6Identifier from './isValidEs6Identifier';

export default function isValidIdentifier(string) {
  return isValidEs5Identifier(string) && isValidEs6Identifier(string);
}
