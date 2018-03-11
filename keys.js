/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module keys
 */

import objectKeys from './.internal/objectKeys';
import isNil from './isNil';

export default function keys(object) {
  return isNil(object) ? [] : objectKeys(object);
}
