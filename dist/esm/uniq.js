/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module uniq
 */
import _uniq from './.internal/_uniq';
import requireObjectCoercible from './requireObjectCoercible';
export default function uniq(array) {
  return _uniq(requireObjectCoercible(array));
}
//# sourceMappingURL=uniq.js.map