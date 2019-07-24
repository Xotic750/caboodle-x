/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module find
 */
import _assertIsFunction from './.internal/_assertIsFunction';
import requireObjectCoercible from './requireObjectCoercible';
import _toInteger from './.internal/_toInteger';
import _find from './.internal/_find';
export default function find(array, callback) {
  return _find(requireObjectCoercible(array), _assertIsFunction(callback), _toInteger(arguments.length <= 2 ? undefined : arguments[2])).value;
}
//# sourceMappingURL=find.js.map