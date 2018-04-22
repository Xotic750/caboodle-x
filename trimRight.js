/**
 * @file List of ECMAScript white space characters.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module trimRight
 */

import _trimRight from './.internal/_trimRight';
import requireObjectCoercible from './requireObjectCoercible';
import toStr from './toString';

export default function trimRight(string) {
  return _trimRight(toStr(requireObjectCoercible(string)));
}
