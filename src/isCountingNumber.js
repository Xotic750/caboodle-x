/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isCountingNumber
 */

export default function isCountingNumber(value) {
  return Number.isSafeInteger(value) && value > 0;
}
