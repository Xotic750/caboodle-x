/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isSpaced
 */

import isStringType from 'src/isStringType';

export default function isSpaced(value) {
  return isStringType(value) && value.includes(' ');
}
