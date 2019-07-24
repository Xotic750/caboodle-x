/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module requireCoercibleToString
 */
import _toString from './.internal/_toString';
import requireObjectCoercible from './requireObjectCoercible';
export default function requireCoercibleToString(value) {
  return _toString(requireObjectCoercible(value));
}
//# sourceMappingURL=requireCoercibleToString.js.map