/**
 * @file Converts a JavaScript object to a primitive value.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module toNumber
 */
import isDate from 'is-date-object';
import isSymbol from 'is-symbol';
import _call from './.internal/_call';
import isPrimitive from './isPrimitive';
import isSymbolSupported from './isSymbolSupported';
import _isFunction from './.internal/_isFunction';
import requireObjectCoercible from './requireObjectCoercible';
import isNil from './isNil';
import isUndefined from './isUndefined';
/* eslint-disable-next-line compat/compat */

var symToPrimitive = isSymbolSupported && Symbol.toPrimitive;
/* eslint-disable-next-line compat/compat */

var symValueOf = isSymbolSupported && Symbol.prototype.valueOf;
var toStringOrder = ['toString', 'valueOf'];
var toNumberOrder = ['valueOf', 'toString'];
var orderLength = 2;

var ordinaryToPrimitive = function _ordinaryToPrimitive(O, hint) {
  requireObjectCoercible(O);

  if (hint !== 'number' && hint !== 'string') {
    throw new TypeError('hint must be "string" or "number"');
  }

  var methodNames = hint === 'string' ? toStringOrder : toNumberOrder;
  var method;
  var result;

  for (var i = 0; i < orderLength; i += 1) {
    method = O[methodNames[i]];

    if (_isFunction(method)) {
      result = _call(method, O);

      if (isPrimitive(result)) {
        return result;
      }
    }
  }

  throw new TypeError('No default value');
};

var getMethod = function _getMethod(O, P) {
  var func = O[P];

  if (!isNil(func)) {
    if (!_isFunction(func)) {
      throw new TypeError("".concat(func, " returned for property ").concat(P, " of object ").concat(O, " is not a function"));
    }

    return func;
  }
  /* eslint-disable-next-line no-void */


  return void 0;
}; // http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive

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
 */


export default function toPrimitive(input) {
  if (isPrimitive(input)) {
    return input;
  }

  var hint = 'default';

  if (arguments.length <= 1 ? 0 : arguments.length - 1) {
    if ((arguments.length <= 1 ? undefined : arguments[1]) === String) {
      hint = 'string';
    } else if ((arguments.length <= 1 ? undefined : arguments[1]) === Number) {
      hint = 'number';
    }
  }

  var exoticToPrim;

  if (isSymbolSupported) {
    if (symToPrimitive) {
      exoticToPrim = getMethod(input, symToPrimitive);
    } else if (isSymbol(input)) {
      exoticToPrim = symValueOf;
    }
  }

  if (!isUndefined(exoticToPrim)) {
    var result = _call(exoticToPrim, input, hint);

    if (isPrimitive(result)) {
      return result;
    }

    throw new TypeError('unable to convert exotic object to primitive');
  }

  if (hint === 'default' && (isDate(input) || isSymbol(input))) {
    hint = 'string';
  }

  return ordinaryToPrimitive(input, hint === 'default' ? 'number' : hint);
}
//# sourceMappingURL=toPrimitive.js.map