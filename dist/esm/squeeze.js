/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module squeeze
 */
import requireObjectCoercible from './requireObjectCoercible';
import _squeeze from './.internal/_squeeze';
export default function squeeze(array) {
  return _squeeze(requireObjectCoercible(array));
}
//# sourceMappingURL=squeeze.js.map