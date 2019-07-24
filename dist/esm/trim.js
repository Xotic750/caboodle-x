/**
 * @file List of ECMAScript white space characters.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module trim
 */
import requireObjectCoercible from './requireObjectCoercible';
import _trim from './.internal/_trim';
import _toString from './.internal/_toString';
export default function trim(string) {
  return _trim(_toString(requireObjectCoercible(string)));
}
//# sourceMappingURL=trim.js.map