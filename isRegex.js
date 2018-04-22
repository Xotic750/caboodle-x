/**
 * @file Is this value a JS regex?
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isRegex
 */

import attempt from './attempt';
import toStringTag from './toStringTag';
import isObjectLike from './isObjectLike';
import isToStringTagSupported from './isToStringTagSupported';
import _hasOwnProperty from './.internal/_hasOwnProperty';
import _exec from './.internal/_exec';
import _getOwnPropertyDescriptor from './.internal/_getOwnPropertyDescriptor';

const regexClass = '[object RegExp]';

const tryRegexExecCall = function _tryRegexExecCall(value) {
  const result = attempt(function _attemptee() {
    const storedLastIndex = value.lastIndex;

    // eslint-disable-next-line no-param-reassign
    value.lastIndex = 0;
    _exec(value);

    return storedLastIndex;
  });

  /* istanbul ignore next */
  if (result.threw) {
    return false;
  }

  // eslint-disable-next-line no-param-reassign
  value.lastIndex = result.value;
  return true;
};

export default function isRegex(value) {
  if (!isObjectLike(value)) {
    return false;
  }

  /* istanbul ignore next */
  if (!isToStringTagSupported) {
    return toStringTag(value) === regexClass;
  }

  const descriptor = _getOwnPropertyDescriptor(value, 'lastIndex');
  const hasLastIndexDataProperty =
    descriptor && _hasOwnProperty(descriptor, 'value');

  if (!hasLastIndexDataProperty) {
    return false;
  }

  return tryRegexExecCall(value);
}
