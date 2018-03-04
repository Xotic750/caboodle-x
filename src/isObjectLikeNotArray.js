/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isObjectLikeNotArray
 */

import isObjectLike from 'src/isObjectLike';

export default function isObjectLikeNotArray(value) {
  return isObjectLike(value) && !Array.isArray(value);
}
