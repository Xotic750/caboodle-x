/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isOneOf
 */

import arrayOrWrapInArray from 'src/arrayOrWrapInArray';

export default function isOneOf(comparate, comparates) {
  return arrayOrWrapInArray(comparates).includes(comparate);
}
