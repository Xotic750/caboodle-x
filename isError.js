/**
 * @file Detect whether a value is an error.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isError
 */

import _getPrototypeOf from './.internal/_getPrototypeOf';
import toStringTag from './toStringTag';
import isObjectLike from './isObjectLike';

let testIsError = function _testIsError(value) {
  return toStringTag(value) === '[object Error]';
};

/* istanbul ignore next */
if (!testIsError(Error.prototype)) {
  const errorProto = Error.prototype;
  const testStringTag = testIsError;
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
 * @example
 * var isError = require('is-error-x');
 *
 * isError(); // false
 * isError(Number.MIN_VALUE); // false
 * isError('abc'); // false
 * isError(new Error()); //true
 */
export default function isError(value) {
  if (!isObjectLike(value)) {
    return false;
  }

  let object = value;
  let maxLoop = 100;
  while (object && maxLoop > -1) {
    if (testIsError(object)) {
      return true;
    }

    object = _getPrototypeOf(object);
    maxLoop -= 1;
  }

  return false;
}
