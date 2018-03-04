/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isUnderscored
 */

import isStringType from 'src/isStringType';

export default function isUnderscored(value) {
  return isStringType(value) && value.includes('_');
}
