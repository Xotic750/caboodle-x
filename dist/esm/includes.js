/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module includes
 */
import _includes from './.internal/_includes';
import _toInteger from './.internal/_toInteger';
import requireObjectCoercible from './requireObjectCoercible';
export default function includes(array, searchElement) {
  return _includes(requireObjectCoercible(array), searchElement, _toInteger(arguments.length <= 2 ? undefined : arguments[2]));
}
//# sourceMappingURL=includes.js.map