/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module requireCoercibleToString
 */

import toStr from './toString';
import requireObjectCoercible from './requireObjectCoercible';

export default function requireCoercibleToString(value) {
  return toStr(requireObjectCoercible(value));
}
