/**
 * @file Convert an integer to a RGB string.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module intToRGB
 */
import _numberToString from './.internal/_numberToString';
import _toUpperCase from './.internal/_toUpperCase';
import toUint24 from './toUint24';
import padStart from './padStart';
var HASH = '#';
/**
 * Takes a number between 0 and 16777215 inclusive and converts it
 * into 6 digit RGB notation.
 *
 * @param {number} i - Integer to be converted into 6 digit RGB.
 * @returns {string} The RGB hexadecimal notation: "#RRGGBB".
 */

export default function intToRGB(i) {
  return HASH + _toUpperCase(padStart(_numberToString(toUint24(i), 16), 6, '0'));
}
//# sourceMappingURL=intToRGB.js.map