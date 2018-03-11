/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isOneOf
 */

import includes from './.internal/arrayIncludes';
import isNil from './isNil';

export default function isOneOf(comparate, comparates) {
  return !isNil(comparates) && includes(comparates, comparate);
}
