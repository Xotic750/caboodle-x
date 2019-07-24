/**
 * @file Is this value a JS regex?
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isRegex
 */
import toStringTag from './toStringTag';
import isObjectLike from './isObjectLike';
import isToStringTagSupported from './isToStringTagSupported';
import _hasOwnProperty from './.internal/_hasOwnProperty';
import _exec from './.internal/_exec';
import _getOwnPropertyDescriptor from './.internal/_getOwnPropertyDescriptor';
var regexClass = '[object RegExp]';

var tryRegexExecCall = function _tryRegexExecCall(value, descriptor) {
  /* istanbul ignore next */
  try {
    value.lastIndex = 0;

    _exec(value);

    return true;
  } catch (e) {
    return false;
  } finally {
    if (descriptor.writable) {
      value.lastIndex = descriptor.value;
    }
  }
};

export default function isRegex(value) {
  if (!isObjectLike(value)) {
    return false;
  }
  /* istanbul ignore next */


  if (!isToStringTagSupported) {
    return toStringTag(value) === regexClass;
  }

  var descriptor = _getOwnPropertyDescriptor(value, 'lastIndex');

  return descriptor && _hasOwnProperty(descriptor, 'value') ? tryRegexExecCall(value, descriptor) : false;
}
//# sourceMappingURL=isRegex.js.map