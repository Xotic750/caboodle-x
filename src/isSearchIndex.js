/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isReservedIdentifier
 */

import isWholeNumber from 'src/isWholeNumber';

export default function isSearchIndex(value) {
  return value === -1 || isWholeNumber(value);
}
