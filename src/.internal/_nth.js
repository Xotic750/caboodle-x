/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _nth
 */

import isString from 'is-string';
import toInteger from '../toInteger';
import isArrayLike from '../isArrayLike';
import _charAt from './_charAt';

export default function _nth(array, ...position) {
  if (!isArrayLike(array)) {
    return void 0;
  }

  const index = position.length ? toInteger(position[0]) : 0;

  return isString(array) ? _charAt(array, index) : array[index];
}
