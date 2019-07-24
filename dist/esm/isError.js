/**
 * @file Detect whether a value is an error.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isError
 */
import _getPrototypeOf from './.internal/_getPrototypeOf';
import toStringTag from './toStringTag';
import isObjectLike from './isObjectLike';

var testIsError = function _testIsError(value) {
  return toStringTag(value) === '[object Error]';
};
/* istanbul ignore next */


if (!testIsError(Error.prototype)) {
  var errorProto = Error.prototype;
  var testStringTag = testIsError;

  testIsError = function _testIsError(value) {
    return value === errorProto || testStringTag(value);
  };
}
/**
 * Determine whether or not a given `value` is an `Error` type.
 *
 * @param {*} value - The object to be tested.
 * @returns {boolean} Returns `true` if `value` is an `Error` type,
 *  else `false`.
 */


export default function isError(value) {
  if (!isObjectLike(value)) {
    return false;
  }

  var object = value;
  var maxLoop = 100;

  while (object && maxLoop > -1) {
    if (testIsError(object)) {
      return true;
    }

    object = _getPrototypeOf(object);
    maxLoop -= 1;
  }

  return false;
}
//# sourceMappingURL=isError.js.map