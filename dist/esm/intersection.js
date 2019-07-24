function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

/**
 * @file Creates an array of unique values that are included in all given arrays.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module intersection
 */
import _sift from './.internal/_sift';
import _accumulate from './.internal/_accumulate';
import _any from './.internal/_any';
import _includes from './.internal/_includes';
import isNil from './isNil';
import _shift from './.internal/_shift';
import _push from './.internal/_push';
import requireObjectCoercible from './requireObjectCoercible';

var isNotNil = function _isNotNil(value) {
  return !isNil(value);
};
/**
 * This method creates an array of unique values that are included in all given
 * arrays using SameValueZero for equality comparisons. The order and references
 * of result values are determined by the first array.
 *
 * @param {...Array} [arrays] - The arrays to inspect.
 * @returns {Array} Returns the new array of intersecting values.
 */


export default function intersection() {
  var _this = this;

  for (var _len = arguments.length, arrays = new Array(_len), _key = 0; _key < _len; _key++) {
    arrays[_key] = arguments[_key];
  }

  var remaining = _sift(requireObjectCoercible(arrays), isNotNil);

  if (remaining.length < 1) {
    return [];
  }

  return _accumulate(_shift(remaining), function (acc, value) {
    var _this2 = this;

    _newArrowCheck(this, _this);

    var isExcluded = !_any(remaining, function (array) {
      _newArrowCheck(this, _this2);

      return !_includes(requireObjectCoercible(array), value);
    }.bind(this));

    if (isExcluded && !_includes(acc, value)) {
      _push(acc, value);
    }

    return acc;
  }.bind(this), []);
}
//# sourceMappingURL=intersection.js.map