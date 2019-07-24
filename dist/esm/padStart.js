/**
 * @file Pads a string with another string (repeated, if needed).
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module padStart
 */
import requireObjectCoercible from './requireCoercibleToString';
import _toString from './.internal/_toString';
import toWholeNumber from './toWholeNumber';
import isUndefined from './isUndefined';
import _stringSlice from './.internal/_stringSlice';
/**
 * This method pads the current string with another string (repeated, if needed)
 * so that the resulting string reaches the given length. The padding is applied
 * from the start (left) of the current string.
 *
 * @param {string} string - The string to pad.
 * @throws {TypeError} If target is null or undefined.
 * @param {number} targetLength - The length of the resulting string once the
 *  current string has been padded. If the value is lower than the current
 *  string's length, the current string will be returned as is.
 * @param {Array} rest - The rest of the arguments array.
 * @param {string} [rest.padString] - The string to pad the current string with. If
 *  this string is too long to stay within the target length, it will be
 *  truncated and the left-most part will be applied. The default value for this
 *  parameter is " " (U+0020).
 * @returns {string} A String of the specified length with the pad string
 *  applied from the start.
 */

export default function padStart(string, targetLength) {
  var str = _toString(requireObjectCoercible(string));

  var stringLength = toWholeNumber(str.length);
  var fillString = (arguments.length <= 2 ? 0 : arguments.length - 2) ? arguments.length <= 2 ? undefined : arguments[2] : void 0;
  var filler = isUndefined(fillString) ? '' : _toString(fillString);

  if (filler === '') {
    filler = ' ';
  }

  var intMaxLength = toWholeNumber(targetLength);

  if (intMaxLength <= stringLength) {
    return str;
  }

  var fillLen = intMaxLength - stringLength;

  while (filler.length < fillLen) {
    var fLen = filler.length;
    var remainingCodeUnits = fillLen - fLen;
    filler += fLen > remainingCodeUnits ? _stringSlice(filler, 0, remainingCodeUnits) : filler;
  }

  var truncatedStringFiller = filler.length > fillLen ? _stringSlice(filler, 0, fillLen) : filler;
  return truncatedStringFiller + str;
}
//# sourceMappingURL=padStart.js.map