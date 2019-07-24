/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isNil
 */

import isUndefined from './isUndefined';
import isNull from './isNull';

export default function isNil(value) {
  return isUndefined(value) || isNull(value);
}
