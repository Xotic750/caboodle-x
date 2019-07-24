var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

/**
 * @file Utility that clamps a number to min and max limits inclusive.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module castArray
 */
import _isArray from './.internal/_isArray';
/**
 * Takes a single, optional argument and then performs the following logic:
 * If an argument is supplied and is an array then it will be returned unchanged,
 * if an argument is supplied and is not an array then it will be wrapped in a new array and returned,
 * if no argument is supplied then a new empty array is returned.
 *
 * @param {Array|*} [args] - A single optional identity argument.
 * @returns {Array} An array as described the the description logic.
 */

export default (function () {
  _newArrowCheck(this, _this);

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (!args.length) {
    return [];
  }

  var identity = args[0];
  return _isArray(identity) ? identity : [identity];
}).bind(this);
//# sourceMappingURL=castArray.js.map