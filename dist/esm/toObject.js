/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module toObject
 */
import requireObjectCoercible from './requireObjectCoercible';
import _Object from './.internal/_Object';
export default function toObject(value) {
  return _Object(requireObjectCoercible(value));
}
//# sourceMappingURL=toObject.js.map