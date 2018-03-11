/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isPopulatedString
 */

import isString from 'is-string';
import trim from './.internal/trim';

export default function isPopulatedString(string) {
  return isString(string) && trim(string).length > 0;
}
