/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module assign
 */
import isFunctionType from './isFunctionType';
import isNil from './isNil';
import toObject from './toObject';
import stubArray from './stubArray';
import _concat from './.internal/_concat';
import _filter from './.internal/_filter';
import _reduce from './.internal/_reduce';
import _keys from './.internal/_keys';
import _propertyIsEnumerable from './.internal/_propertyIsEnumerable';
import _Object from './.internal/_Object';
/* istanbul ignore next */

var getOwnPropertySymbols = isFunctionType(_Object.getOwnPropertySymbols) ? _Object.getOwnPropertySymbols : stubArray;

var getOwnEnumerablePropertySymbols = function _getOwnEnumerablePropertySymbols(target) {
  var isEnumerable = function _isEnumerable(symbol) {
    return _propertyIsEnumerable(target, symbol);
  };

  return _filter(getOwnPropertySymbols(target), isEnumerable);
};

var reducer = function _reducer(tgt, source) {
  if (isNil(source)) {
    return tgt;
  }

  var object = _Object(source);

  var assigner = function _assigner(tar, key) {
    tar[key] = object[key];
    return tar;
  };

  return _reduce(_concat(_keys(object), getOwnEnumerablePropertySymbols(object)), assigner, tgt);
};
/**
 * This method is used to copy the values of all enumerable own properties from
 * one or more source objects to a target object. It will return the target object.
 *
 * @param {*} target - The target object.
 * @param {Array} rest - The rest of the arguments array.
 * @param {...*} [rest.source] - The source object(s).
 * @throws {TypeError} If target is null or undefined.
 * @returns {object} The target object.
 */


export default function assign(target) {
  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  return _reduce(rest, reducer, toObject(target));
}
//# sourceMappingURL=assign.js.map