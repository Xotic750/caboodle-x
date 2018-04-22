/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module assertIsObjectLike
 */

import _assertIs from './.internal/_assertIs';
import isObjectLike from './isObjectLike';

const asserter = _assertIs(isObjectLike, 'Not an object');

export default function assertIsObjectLike(value, ...customMessage) {
  return asserter(value, ...customMessage);
}
