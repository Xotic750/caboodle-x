/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module sift
 */
import _assertIsFunction from './.internal/_assertIsFunction';
import requireObjectCoercible from './requireObjectCoercible';
import _sift from './.internal/_sift';
import _toInteger from './.internal/_toInteger';
export default function sift(array, callback) {
  return _sift(requireObjectCoercible(array), _assertIsFunction(callback), _toInteger(arguments.length <= 2 ? undefined : arguments[2]));
}
//# sourceMappingURL=sift.js.map