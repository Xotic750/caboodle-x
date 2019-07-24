/**
 * @file Get the name of the function.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module getFunctionName
 */

import _match from './.internal/_match';
import _functionToString from './.internal/_functionToString';
import _isFunction from './.internal/_isFunction';
import normalizeSpace from './normalizeSpace';
import replaceComments from './replaceComments';

const ANONYMOUS = 'anonymous';

function test1() {}

let getName;

if (test1.name === 'test1') {
  /* eslint-disable-next-line no-new-func */
  const createsAnonymous = Function().name === ANONYMOUS;

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
    let match;
    try {
      match = _match(normalizeSpace(replaceComments(_functionToString(fn), ' ')), reName);

      if (match) {
        const name = match[1];

        return name === ANONYMOUS ? '' : name;
      }
    } catch (ignore) {
      /* ignore */
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
 */
export default function getFunctionName(fn) {
  /* eslint-disable-next-line no-void */
  return _isFunction(fn, true) ? getName(fn) : void 0;
}