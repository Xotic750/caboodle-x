function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * @file Utility to invoke a function and return the result or return the identity argument unchanged.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module callFunctionOrIdentity
 */
import _apply from './.internal/_apply';
import assertIsObject from './assertIsObjectLike';
import _isFunction from './.internal/_isFunction';
import _slice from './.internal/_slice';
import isNil from './isNil';

var requireIsObject = function _requireIsObject(value) {
  return assertIsObject(value, 'CreateListFromArrayLike called on non-object');
};

var getArgsArray = function _getArgsArray(value) {
  return isNil(value) ? [] : _slice(requireIsObject(value));
};
/**
 * Invoke a function and return the result or return the identity argument unchanged.
 *
 * @param {Function|*} fnOrValue - The function to invoke or any other value.
 * @param {Array} rest - The remaining arguments.
 * @param {Array} [rest.argsArray=[]] - The argument(s) to use when invoking a given function.
 * @param {*} [rest.thisArg=undefined] - The context to use when invoking a given function.
 * @returns {*} The result of the invoked function or the identity argument unchanged.
 */


export default function callFunctionOrIdentity(fnOrValue) {
  if (_isFunction(fnOrValue)) {
    var argsArray = getArgsArray(arguments.length <= 1 ? undefined : arguments[1]);
    return (arguments.length <= 1 ? 0 : arguments.length - 1) > 1 ? _apply(fnOrValue, arguments.length <= 2 ? undefined : arguments[2], argsArray) : fnOrValue.apply(void 0, _toConsumableArray(argsArray));
  }

  return fnOrValue;
}
//# sourceMappingURL=callFunctionOrIdentity.js.map