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
const getOwnPropertySymbols = isFunctionType(_Object.getOwnPropertySymbols)
  ? _Object.getOwnPropertySymbols
  : stubArray;

const getOwnEnumerablePropertySymbols = function _getOwnEnumerablePropertySymbols(
  target,
) {
  return _filter(getOwnPropertySymbols(target), function _predicate(symbol) {
    return _propertyIsEnumerable(target, symbol);
  });
};

const reducer = function _reducer(tgt, source) {
  if (isNil(source)) {
    return tgt;
  }

  const object = _Object(source);

  return _reduce(
    _concat(_keys(object), getOwnEnumerablePropertySymbols(object)),
    function _iteratee(tar, key) {
      // eslint-disable-next-line no-param-reassign
      tar[key] = object[key];

      return tar;
    },
    tgt,
  );
};

/**
 * This method is used to copy the values of all enumerable own properties from
 * one or more source objects to a target object. It will return the target object.
 *
 * @param {*} target - The target object.
 * @param {Array} rest - The rest of the arguments array.
 * @param {...*} [rest.source] - The source object(s).
 * @throws {TypeError} If target is null or undefined.
 * @returns {Object} The target object.
 * @example
 * var assign = require('object-assign-x');
 *
 * var obj = { a: 1 };
 * var copy = assign({}, obj);
 * console.log(copy); // { a: 1 }
 */

export default function assign(target, ...rest) {
  return _reduce(rest, reducer, toObject(target));
}
