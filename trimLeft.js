/**
 * @file List of ECMAScript white space characters.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module trimLeft
 */

import _trimLeft from './.internal/_trimLeft';
import requireObjectCoercible from './requireObjectCoercible';
import toStr from './toString';

export default function trimLeft(string) {
  return _trimLeft(toStr(requireObjectCoercible(string)));
}
