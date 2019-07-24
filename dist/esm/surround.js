/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module surround
 */
import _toString from './.internal/_toString';
export default function surround(string, wrapper) {
  var wrap = _toString(wrapper);

  return wrap + _toString(string) + wrap;
}
//# sourceMappingURL=surround.js.map