/**
 * @file Utility to set a default value from an array.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module defaultToOneOf
 */
import _includes from './.internal/_includes';
import _last from './.internal/_last';
import requireObjectCoercible from './requireObjectCoercible';
/**
 * Tests if a comparate exists in a list of comparates an then returns the comparate if there
 * is a match; otherwise returns the last comparates value or fallback value if supplied.
 *
 * @param {Array} [comparates=[]] - An array of values.
 * @param {*} comparate - The value to compare against the supplied list of comparates.
 * @param {Array} fallbackArg - The rest of the arguments array.
 * @param {*} [fallbackArg.fallback=comparates[last]] - The returned value if no match exists.
 * @returns {*} - The comparate upon a match; otherwise the fallback value.
 */

export default function defaultToOneOf(comparates, comparate) {
  requireObjectCoercible(comparates);
  var fallback = (arguments.length <= 2 ? 0 : arguments.length - 2) ? arguments.length <= 2 ? undefined : arguments[2] : _last(comparates);
  return _includes(comparates, comparate) ? comparate : fallback;
}
//# sourceMappingURL=defaultToOneOf.js.map