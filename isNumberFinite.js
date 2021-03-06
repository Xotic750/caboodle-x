/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isNumberFinite
 */

import isNumberNaN from './isNumberNaN';
import _Infinity from './.internal/_Infinity';
import isNumberType from './isNumberType';

/**
 * This method determines whether the passed value is a finite number.
 *
 * @param {*} number - The value to be tested for finiteness.
 * @returns {boolean} A Boolean indicating whether or not the given value is a finite number.
 * @example
 * var numIsFinite = require('is-finite-x');
 *
 * numIsFinite(Infinity);  // false
 * numIsFinite(NaN);       // false
 * numIsFinite(-Infinity); // false
 *
 * numIsFinite(0);         // true
 * numIsFinite(2e64);      // true
 *
 * numIsFinite('0');       // false, would've been true with
 *                         // global isFinite('0')
 * numIsFinite(null);      // false, would've been true with
 */
export default function isNumberFinite(number) {
  return (
    isNumberType(number) &&
    !isNumberNaN(number) &&
    number !== _Infinity &&
    number !== -_Infinity
  );
}
