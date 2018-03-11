/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module requireObjectCoercible
 */

import toString from './.internal/toString';
import isNil from './isNil';

const MSG1 = 'Cannot call method on ';

/**
 * The abstract operation RequireObjectCoercible throws an error if argument
 * is a value that cannot be converted to an Object using ToObject.
 *
 * @param {*} value - The `value` to check.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {string} The `value`.
 * @example
 * var RequireObjectCoercible = require('caboodle-x/requireObjectCoercible');
 *
 * RequireObjectCoercible(); // TypeError
 * RequireObjectCoercible(null); // TypeError
 * RequireObjectCoercible('abc'); // 'abc'
 * RequireObjectCoercible(true); // true
 * RequireObjectCoercible(Symbol('foo')); // Symbol('foo')
 */
export default function requireObjectCoercible(value) {
  if (isNil(value)) {
    throw new TypeError(MSG1 + toString(value));
  }

  return value;
}
