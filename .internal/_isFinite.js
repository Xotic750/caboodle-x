/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _isFinite
 */

import _isNaN from './_isNaN';
import _Infinity from './_Infinity';
import isNumberType from '../isNumberType';

/**
 * This method determines whether the passed value is a finite number.
 *
 * @param {*} number - The value to be tested for finiteness.
 * @returns {boolean} A Boolean indicating whether or not the given value is a finite number.
 */
export default function _isFinite(number) {
  return isNumberType(number) && !_isNaN(number) && number !== _Infinity && number !== -_Infinity;
}
