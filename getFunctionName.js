/**
 * @file Get the name of the function.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module getFunctionName
 */

import attempt from './attempt';
import _isArray from './.internal/_isArray';
import _match from './.internal/_match';
import _functionToString from './.internal/_functionToString';
import isFunction from './isFunction';
import _Function from './.internal/_Function';
import normalizeSpace from './normalizeSpace';
import replaceComments from './replaceComments';

const ANONYMOUS = 'anonymous';

let getName;
/* istanbul ignore next */
if (function test1() {}.name === 'test1') {
  const createsAnonymous = _Function().name === ANONYMOUS;
  if (createsAnonymous) {
    getName = function _getName(fn) {
      return fn.name === ANONYMOUS ? '' : fn.name;
    };
  } else {
    getName = function _getName(fn) {
      return fn.name;
    };
  }
} else {
  const reName = /^(?:async )?(?:function|class) ?(?:\* )?([\w$]+)/i;
  getName = function _getName(fn) {
    const result = attempt(function _attemptee() {
      return _match(
        normalizeSpace(replaceComments(_functionToString(fn), ' ')),
        reName,
      );
    });

    if (_isArray(result.value)) {
      const name = result.value[1];

      return name === ANONYMOUS ? '' : name;
    }

    return '';
  };
}

/**
 * This method returns the name of the function, or `undefined` if not
 * a function.
 *
 * @param {Function} fn - The function to get the name of.
 * @returns {undefined|string} The name of the function,  or `undefined` if
 *  not a function.
 * @example
 * var getFunctionName = require('get-function-name-x');
 *
 * getFunctionName(); // undefined
 * getFunctionName(Number.MIN_VALUE); // undefined
 * getFunctionName('abc'); // undefined
 * getFunctionName(true); // undefined
 * getFunctionName({ name: 'abc' }); // undefined
 * getFunctionName(function () {}); // ''
 * getFunctionName(new Function ()); // ''
 * getFunctionName(function test1() {}); // 'test1'
 * getFunctionName(function* test2() {}); // 'test2'
 * getFunctionName(class Test {}); // 'Test'
 */
export default function getFunctionName(fn) {
  return isFunction(fn, true) ? getName(fn) : void 0;
}
