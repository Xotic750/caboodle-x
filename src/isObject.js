/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isObject
 */

import isNil from 'src/isNil';

export default function isObject(value) {
  return !isNil(value) && Object(value) === value;
}
