/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isWholeNumber
 */

import isSafeInteger from './.internal/isSafeInteger';

export default function isWholeNumber(value) {
  return isSafeInteger(value) && value >= 0;
}
