/**
 * @file Utility to test if a comparate exists in a list of comparates, return comparate or supply a fallback.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module dropRight
 */
import _uniSlice from './.internal/_uniSlice';
import isArrayLike from './isArrayLike';
import requireObjectCoercible from './requireObjectCoercible';
import toInteger from './toInteger';
import _push from './.internal/_push';
export default function dropRight(array) {
  if (!isArrayLike(requireObjectCoercible(array))) {
    return void 0;
  }

  var stop = (arguments.length <= 1 ? 0 : arguments.length - 1) ? toInteger(arguments.length <= 1 ? undefined : arguments[1]) : 1;
  var args = [0];

  if (stop >= array.length) {
    _push(args, 0);
  } else if (stop > 0) {
    _push(args, -stop);
  }

  return _uniSlice.apply(void 0, [array].concat(args));
}
//# sourceMappingURL=dropRight.js.map