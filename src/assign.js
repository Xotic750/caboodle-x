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
const getOwnPropertySymbols = isFunctionType(_Object.getOwnPropertySymbols) ? _Object.getOwnPropertySymbols : stubArray;

const getOwnEnumerablePropertySymbols = function _getOwnEnumerablePropertySymbols(target) {
  const isEnumerable = function _isEnumerable(symbol) {
    return _propertyIsEnumerable(target, symbol);
  };

  return _filter(getOwnPropertySymbols(target), isEnumerable);
};

const reducer = function _reducer(tgt, source) {
  if (isNil(source)) {
    return tgt;
  }

  const object = _Object(source);
  const assigner = function _assigner(tar, key) {
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

export default function assign(target, ...rest) {
  return _reduce(rest, reducer, toObject(target));
}
