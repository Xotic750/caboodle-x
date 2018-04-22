/**
 * @file Converts a JavaScript object to a primitive value.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module toNumber
 */

import isSymbol from 'is-symbol';
import isDate from './isDate';
import _call from './.internal/_call';
import isPrimitive from './isPrimitive';
import isSymbolSupported from './isSymbolSupported';
import isFunction from './isFunction';
import requireObjectCoercible from './requireObjectCoercible';
import isUndefined from './isUndefined';
import _hasToPrimitive from './.internal/_hasToPrimitive';
import _getMethod from './.internal/_getMethod';
import _any from './.internal/_any';

const symToPrimitive = _hasToPrimitive && Symbol.toPrimitive;
const symValueOf = isSymbolSupported && Symbol.prototype.valueOf;
const toStringOrder = ['toString', 'valueOf'];
const toNumberOrder = ['valueOf', 'toString'];

const ordinaryToPrimitive = function _ordinaryToPrimitive(object, hint) {
  requireObjectCoercible(object);
  /* istanbul ignore next */
  if (hint !== 'number' && hint !== 'string') {
    throw new TypeError('hint must be "string" or "number"');
  }

  const methodNames = hint === 'string' ? toStringOrder : toNumberOrder;
  let result;
  const wasConverted = _any(methodNames, function _predicate(methodName) {
    const method = object[methodName];
    if (isFunction(method)) {
      result = _call(method, object);
      if (isPrimitive(result)) {
        return true;
      }
    }

    return false;
  });

  if (wasConverted) {
    return result;
  }

  throw new TypeError('No default value');
};

// http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive

/**
 * This method converts a JavaScript object to a primitive value.
 * Note: When toPrimitive is called with no hint, then it generally behaves as
 * if the hint were Number. However, objects may over-ride this behaviour by
 * defining a @@toPrimitive method. Of the objects defined in this specification
 * only Date objects (see 20.3.4.45) and Symbol objects (see 19.4.3.4) over-ride
 * the default ToPrimitive behaviour. Date objects treat no hint as if the hint
 * were String.
 *
 * @param {*} input - The input to convert.
 * @param {constructor} [preferredType] - The preferred type (String or Number).
 * @throws {TypeError} If unable to convert input to a primitive.
 * @returns {string|number} The converted input as a primitive.
 * @example
 * var toPrimitive = require('to-primitive-x');
 *
 * var date = new Date(0);
 * toPrimitive(date)); // Thu Jan 01 1970 01:00:00 GMT+0100 (CET)
 * toPrimitive(date, String)); // Thu Jan 01 1970 01:00:00 GMT+0100 (CET)
 * toPrimitive(date, Number)); // 0
 */
export default function toPrimitive(input, ...preferredType) {
  if (isPrimitive(input)) {
    return input;
  }

  let hint = 'default';
  if (preferredType.length) {
    if (preferredType[0] === String) {
      hint = 'string';
    } else if (preferredType[0] === Number) {
      hint = 'number';
    }
  }

  let exoticToPrim;
  /* istanbul ignore next */
  if (isSymbolSupported) {
    if (symToPrimitive) {
      exoticToPrim = _getMethod(input, symToPrimitive);
    } else if (isSymbol(input)) {
      exoticToPrim = symValueOf;
    }
  }

  if (!isUndefined(exoticToPrim)) {
    const result = _call(exoticToPrim, input, hint);
    if (isPrimitive(result)) {
      return result;
    }

    throw new TypeError('unable to convert exotic object to primitive');
  }

  if (hint === 'default' && (isDate(input) || isSymbol(input))) {
    /* istanbul ignore next */
    hint = 'string';
  }

  return ordinaryToPrimitive(input, hint === 'default' ? 'number' : hint);
}
