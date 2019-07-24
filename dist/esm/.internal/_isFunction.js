/**
 * @file Determine whether a given value is a function object.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _isFunction
 */
import _functionToString from './_functionToString';
import _test from './_test';
import attempt from '../attempt';
import _Boolean from './_Boolean';
import toStringTag from '../toStringTag';
import isToStringTagSupported from '../isToStringTagSupported';
import isPrimitive from '../isPrimitive';
import normalizeSpace from '../normalizeSpace';
import replaceComments from '../replaceComments';
import isClassSupported from '../isClassSupported';
var FUNC_TAG = '[object Function]';
var GEN_TAG = '[object GeneratorFunction]';
var ASYNC_TAG = '[object AsyncFunction]';
var ctrRx = /^class /;

var testClassString = function _testClassString(value) {
  return _test(ctrRx, normalizeSpace(replaceComments(_functionToString(value), ' ')));
};

var isES6ClassFn = function _isES6ClassFn(value) {
  var result = attempt(testClassString, value);
  return !result.threw && result.value;
};
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @private
 * @param {*} value - The value to check.
 * @param {boolean} allowClass - Whether to _sift ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */


var tryFuncToString = function _tryFuncToString(value, allowClass) {
  if (isClassSupported && !allowClass && isES6ClassFn(value)) {
    return false;
  }

  return !attempt(_functionToString, value).threw;
};
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @param {*} value - The value to check.
 * @param {boolean} [allowClass=false] - Whether to _sift ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */


export default function isFunction(value) {
  if (isPrimitive(value)) {
    return false;
  }

  if (isToStringTagSupported) {
    return tryFuncToString(value, _Boolean(arguments.length <= 1 ? undefined : arguments[1]));
  }

  if (isClassSupported && !(arguments.length <= 1 ? undefined : arguments[1]) && isES6ClassFn(value)) {
    return false;
  }

  var strTag = toStringTag(value);
  return strTag === FUNC_TAG || strTag === GEN_TAG || strTag === ASYNC_TAG;
}
//# sourceMappingURL=_isFunction.js.map