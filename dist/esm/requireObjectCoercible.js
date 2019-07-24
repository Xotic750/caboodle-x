/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module requireObjectCoercible
 */
import _assertIs from './.internal/_assertIs';
import _negate from './.internal/_negate';
import isNil from './isNil';
/**
 * The abstract operation RequireObjectCoercible throws an error if argument
 * is a value that cannot be converted to an Object using ToObject.
 *
 * @param {*} value - The `value` to check.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {string} The `value`.
 */

export default _assertIs(_negate(isNil), 'Cannot call method on null or undefined');
//# sourceMappingURL=requireObjectCoercible.js.map