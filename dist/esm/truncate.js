/**
 * @file Truncate a string to a maximum specified length.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module truncate
 */
import isRegExp from './isRegex';
import isUndefined from './isUndefined';
import toWholeNumber from './toWholeNumber';
import _toString from './.internal/_toString';
import isObjectLike from './isObjectLike';
import _hasOwnProperty from './.internal/_hasOwnProperty';
import _exec from './.internal/_exec';
import _join from './.internal/_join';
import _stringLastIndexOf from './.internal/_stringLastIndexOf';
import _match from './.internal/_match';
import _search from './.internal/_search';
import _slice from './.internal/_slice';
import _stringSlice from './.internal/_stringSlice';
import _stringIndexOf from './.internal/_stringIndexOf';
import _RegExp from './.internal/_RegExp';
import _test from './.internal/_test';
var G_FLAG = 'g';
/* Used to match `RegExp` flags from their coerced string values. */

var matchFlags = /\w*$/;
/* Used to compose unicode character classes. */

var rsAstralRange = "\\ud800-\\udfff";
var rsComboMarksRange = "\\u0300-\\u036f\\ufe20-\\ufe23";
var rsComboSymbolsRange = "\\u20d0-\\u20f0";
var rsVarRange = "\\ufe0e\\ufe0f";
/* Used to compose unicode capture groups. */

var rsAstral = "[".concat(rsAstralRange, "]");
var rsCombo = "[".concat(rsComboMarksRange).concat(rsComboSymbolsRange, "]");
var rsFitz = "\\ud83c[\\udffb-\\udfff]";
var rsModifier = "(?:".concat(rsCombo, "|").concat(rsFitz, ")");
var rsNonAstral = "[^".concat(rsAstralRange, "]");
var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
var rsZWJ = "\\u200d";
/* Used to compose unicode regexes. */

var reOptMod = "".concat(rsModifier, "?");
var rsOptVar = "[".concat(rsVarRange, "]?");
var rsOptJoin = "(?:".concat(rsZWJ, "(?:").concat(_join([rsNonAstral, rsRegional, rsSurrPair], '|'), ")").concat(rsOptVar).concat(reOptMod, ")*");
var rsSeq = rsOptVar + reOptMod + rsOptJoin;
var rsSymbol = "(?:".concat(_join(["".concat(rsNonAstral + rsCombo, "?"), rsCombo, rsRegional, rsSurrPair, rsAstral], '|'), ")");
/*
 * Used to match string symbols
 * @see https://mathiasbynens.be/notes/javascript-unicode
 */

var reComplexSymbol = new _RegExp("".concat(rsFitz, "(?=").concat(rsFitz, ")|").concat(rsSymbol).concat(rsSeq), G_FLAG);
/*
 * Used to detect strings with [zero-width joiners or code points from
 * the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/).
 */

var reHasComplexSymbol = new _RegExp("[".concat(rsZWJ).concat(rsAstralRange).concat(rsComboMarksRange).concat(rsComboSymbolsRange).concat(rsVarRange, "]"));

var hasComplexSymbol = function _hasComplexSymbol(string) {
  return _test(reHasComplexSymbol, string);
};
/**
 * Gets the number of symbols in `string`.
 *
 * @private
 * @param {string} string - The string to inspect.
 * @returns {number} Returns the string size.
 */


var stringSize = function _stringSize(string) {
  if (!string || !hasComplexSymbol(string)) {
    return string.length;
  }

  reComplexSymbol.lastIndex = 0;
  var result = 0;

  while (_test(reComplexSymbol, string)) {
    result += 1;
  }

  return result;
};
/**
 * Truncates `string` if it's longer than the given maximum string length.
 * The last characters of the truncated string are replaced with the omission
 * string which defaults to "...".
 *
 * @param {string} string - The string to truncate.
 * @param {object} [options] - The options object.
 * @param {number} [options.length=30] - The maximum string length.
 * @param {string} [options.omission='...'] - The string to indicate text
 * is omitted.
 * @param {RegExp|string} [options.separator] - The separator pattern to
 * truncate to.
 * @returns {string} Returns the truncated string.
 */


export default function truncate(string, options) {
  var str = _toString(string);

  var length = 30;
  var omission = '...';
  var separator;

  if (isObjectLike(options)) {
    if (_hasOwnProperty(options, 'separator')) {
      separator = isRegExp(options.separator) ? options.separator : _toString(options.separator);
    }

    if (_hasOwnProperty(options, 'length')) {
      length = toWholeNumber(options.length);
    }

    if (_hasOwnProperty(options, 'omission')) {
      omission = _toString(options.omission);
    }
  }

  var strLength = str.length;
  var matchSymbols;

  if (hasComplexSymbol(str)) {
    matchSymbols = _match(str, reComplexSymbol);
    strLength = matchSymbols.length;
  }

  if (length >= strLength) {
    return str;
  }

  var end = length - stringSize(omission);

  if (end < 1) {
    return omission;
  }

  var result = matchSymbols ? _join(_slice(matchSymbols, 0, end), '') : _stringSlice(str, 0, end);

  if (isUndefined(separator)) {
    return result + omission;
  }

  if (matchSymbols) {
    end += result.length - end;
  }

  if (isRegExp(separator)) {
    if (_search(_stringSlice(str, end), separator)) {
      var substr = result;

      if (!separator.global) {
        separator = new _RegExp(separator.source, _toString(_exec(matchFlags, separator)) + G_FLAG);
      }

      separator.lastIndex = 0;
      var newEnd;

      var match = _exec(separator, substr);

      while (match) {
        newEnd = match.index;
        match = _exec(separator, substr);
      }

      result = _stringSlice(result, 0, isUndefined(newEnd) ? end : newEnd);
    }
  } else if (_stringIndexOf(str, separator, end) !== end) {
    var index = _stringLastIndexOf(result, separator);

    if (index > -1) {
      result = _stringSlice(result, 0, index);
    }
  }

  return result + omission;
}
//# sourceMappingURL=truncate.js.map