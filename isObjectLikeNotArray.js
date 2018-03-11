/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isObjectLikeNotArray
 */

import isArray from './.internal/isArray';
import isObjectLike from './isObjectLike';

export default function isObjectLikeNotArray(value) {
  return !isArray(value) && isObjectLike(value);
}
