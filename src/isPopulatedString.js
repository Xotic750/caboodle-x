/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isPopulatedString
 */

import isStringType from 'src/isStringType';

export default function isPopulatedString(value) {
  return isStringType(value) && value.trim().length > 0;
}
