/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isDashed
 */

import isStringType from 'src/isStringType';

export default function isDashed(value) {
  return isStringType(value) && value.includes('-');
}
