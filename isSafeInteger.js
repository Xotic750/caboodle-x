/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isSafeInteger
 */

import isInteger from './isInteger';
import MAX_SAFE_INTEGER from './maxSafeInteger';

export default function isSafeInteger(value) {
  return (
    isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER
  );
}
