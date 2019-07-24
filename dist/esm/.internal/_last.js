/**
 * @file Utility to test if a comparate exists in a list of comparates, return comparate or supply a fallback.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _last
 */
import _nth from './_nth';
export default function _last(array) {
  return _nth(array, array.length - 1);
}
//# sourceMappingURL=_last.js.map