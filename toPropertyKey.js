/**
 * @file Converts argument to a value that can be used as a property key.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module toPropertyKey
 */

import isSymbolSupported from './isSymbolSupported';
import isSymbolType from './isSymbolType';
import toPrimitive from './toPrimitive';
import _toString from './.internal/_toString';

/**
 * This method Converts argument to a value that can be used as a property key.
 *
 * @param {*} argument - The argument to onvert to a property key.
 * @throws {TypeError} If argument is not a symbol and is not coercible to a string.
 * @returns {string|symbol} The converted argument.
 * @example
 * var toPropertyKey = require('to-property-key-x');
 *
 * toPropertyKey(); // 'undefined'
 * toPropertyKey(1); // '1'
 * toPropertyKey(true); // 'true'
 *
 * var symbol = Symbol('a');
 * toPropertyKey(symbol); // symbol
 *
 * toPropertyKey(Object.create(null)); // TypeError
 */
export default function toPropertyKey(argument) {
  const key = toPrimitive(argument, String);

  return isSymbolSupported && isSymbolType(key) ? key : _toString(key);
}
