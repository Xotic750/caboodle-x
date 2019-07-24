/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module nth
 */

import requireObjectCoercible from './requireObjectCoercible';
import _nth from './.internal/_nth';

export default function nth(array, ...position) {
  return _nth(requireObjectCoercible(array), ...position);
}
