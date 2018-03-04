/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isNil
 */

import isUndefined from 'src/isUndefined';
import isNull from 'src/isNull';

export default function isNil(value) {
  return isUndefined(value) || isNull(value);
}
