/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isObject
 */

import toObject from './.internal/toObject';
import isNil from './isNil';

export default function isObject(value) {
  return !isNil(value) && toObject(value) === value;
}
