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
 * @param {*} argument - The argument to convert to a property key.
 * @throws {TypeError} If argument is not a symbol and is not coercible to a string.
 * @returns {string|Symbol} The converted argument.
 */

export default function toPropertyKey(argument) {
  var key = toPrimitive(argument, String);
  return isSymbolSupported && isSymbolType(key) ? key : _toString(key);
}
//# sourceMappingURL=toPropertyKey.js.map