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

const G_FLAG = 'g';
/* Used to match `RegExp` flags from their coerced string values. */
const matchFlags = /\w*$/;

/* Used to compose unicode character classes. */
const rsAstralRange = '\\ud800-\\udfff';
const rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23';
const rsComboSymbolsRange = '\\u20d0-\\u20f0';
const rsVarRange = '\\ufe0e\\ufe0f';

/* Used to compose unicode capture groups. */
const rsAstral = `[${rsAstralRange}]`;
const rsCombo = `[${rsComboMarksRange}${rsComboSymbolsRange}]`;
const rsFitz = '\\ud83c[\\udffb-\\udfff]';
const rsModifier = `(?:${rsCombo}|${rsFitz})`;
const rsNonAstral = `[^${rsAstralRange}]`;
const rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}';
const rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]';
const rsZWJ = '\\u200d';

/* Used to compose unicode regexes. */
const reOptMod = `${rsModifier}?`;
const rsOptVar = `[${rsVarRange}]?`;
const rsOptJoin = `(?:${rsZWJ}(?:${_join([rsNonAstral, rsRegional, rsSurrPair], '|')})${rsOptVar}${reOptMod})*`;

const rsSeq = rsOptVar + reOptMod + rsOptJoin;
const rsSymbol = `(?:${_join([`${rsNonAstral + rsCombo}?`, rsCombo, rsRegional, rsSurrPair, rsAstral], '|')})`;

/*
 * Used to match string symbols
 * @see https://mathiasbynens.be/notes/javascript-unicode
 */
const reComplexSymbol = new _RegExp(`${rsFitz}(?=${rsFitz})|${rsSymbol}${rsSeq}`, G_FLAG);

/*
 * Used to detect strings with [zero-width joiners or code points from
 * the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/).
 */
const reHasComplexSymbol = new _RegExp(`[${rsZWJ}${rsAstralRange}${rsComboMarksRange}${rsComboSymbolsRange}${rsVarRange}]`);
const hasComplexSymbol = function _hasComplexSymbol(string) {
  return _test(reHasComplexSymbol, string);
};

/**
 * Gets the number of symbols in `string`.
 *
 * @private
 * @param {string} string - The string to inspect.
 * @returns {number} Returns the string size.
 */
const stringSize = function _stringSize(string) {
  if (!string || !hasComplexSymbol(string)) {
    return string.length;
  }

  reComplexSymbol.lastIndex = 0;

  let result = 0;
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
 * @param {Object} [options] - The options object.
 * @param {number} [options.length=30] - The maximum string length.
 * @param {string} [options.omission='...'] - The string to indicate text
 * is omitted.
 * @param {RegExp|string} [options.separator] - The separator pattern to
 * truncate to.
 * @returns {string} Returns the truncated string.
 */
export default function truncate(string, options) {
  const str = _toString(string);
  let length = 30;
  let omission = '...';
  let separator;

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

  let strLength = str.length;
  let matchSymbols;

  if (hasComplexSymbol(str)) {
    matchSymbols = _match(str, reComplexSymbol);
    strLength = matchSymbols.length;
  }

  if (length >= strLength) {
    return str;
  }

  let end = length - stringSize(omission);

  if (end < 1) {
    return omission;
  }

  let result = matchSymbols ? _join(_slice(matchSymbols, 0, end), '') : _stringSlice(str, 0, end);

  if (isUndefined(separator)) {
    return result + omission;
  }

  if (matchSymbols) {
    end += result.length - end;
  }

  if (isRegExp(separator)) {
    if (_search(_stringSlice(str, end), separator)) {
      const substr = result;

      if (!separator.global) {
        separator = new _RegExp(separator.source, _toString(_exec(matchFlags, separator)) + G_FLAG);
      }

      separator.lastIndex = 0;
      let newEnd;
      let match = _exec(separator, substr);
      while (match) {
        newEnd = match.index;
        match = _exec(separator, substr);
      }

      result = _stringSlice(result, 0, isUndefined(newEnd) ? end : newEnd);
    }
  } else if (_stringIndexOf(str, separator, end) !== end) {
    const index = _stringLastIndexOf(result, separator);

    if (index > -1) {
      result = _stringSlice(result, 0, index);
    }
  }

  return result + omission;
}
