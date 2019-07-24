/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isPrimitive
 */

import isFunctionType from './isFunctionType';
import isNull from './isNull';
import isObjectType from './isObjectType';

export default function isPrimitive(value) {
  return isNull(value) || (!isFunctionType(value) && !isObjectType(value));
}
