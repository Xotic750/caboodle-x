/**
 * @file List of ECMAScript white space characters.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module trimLeft
 */
import _trimLeft from './.internal/_trimLeft';
import requireObjectCoercible from './requireObjectCoercible';
import _toString from './.internal/_toString';
export default function trimLeft(string) {
  return _trimLeft(_toString(requireObjectCoercible(string)));
}
//# sourceMappingURL=trimLeft.js.map