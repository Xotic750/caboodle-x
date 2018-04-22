/**
 * @file Utility that creates a delayed promise.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module toInteger
 */

import isNumberNaN from './isNumberNaN';
import isNumberFinite from './isNumberFinite';
import toNumber from './toNumber';
import sign from './sign';

const {abs, floor} = Math;

export default function toInteger(value) {
  const number = toNumber(value);

  if (isNumberNaN(number)) {
    return 0;
  }

  if (number === 0 || !isNumberFinite(number)) {
    return number;
  }

  return sign(number) * floor(abs(number));
}
