/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isObjectLike
 */

import isNull from './isNull';
import isObjectType from './isObjectType';

export default function isObjectLike(value) {
  return !isNull(value) && isObjectType(value);
}
