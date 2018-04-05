/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isObjectLikeNotArray
 */

import _isArray from './.internal/_isArray';
import isObjectLike from './isObjectLike';

export default function isObjectLikeNotArray(value) {
  return !_isArray(value) && isObjectLike(value);
}
