/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isConstantIdentifier
 */

import isValidIdentifier from 'src/isValidIdentifier';

export default function isConstantIdentifier(value) {
  return isValidIdentifier(value) && value === value.toUpperCase();
}
