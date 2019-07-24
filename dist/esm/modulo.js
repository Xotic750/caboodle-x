/**
 * @file Modulo - floored division implementation.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module toStringTag
 */
var floor = Math.floor;
/**
 * The notation “x modulo y” (y must be finite and nonzero) computes a value k
 * of the same sign as y (or zero) such that abs(k) < abs(y) and x-k = q × y
 * for some integer q.
 *
 * Donald Knuth described floored division where the quotient is defined by
 * the floor function q = ⌊a/n⌋ and thus according to equation the remainder
 * would have the same sign as the divisor. Due to the floor function, the
 * quotient is always rounded downwards, even if it is already negative.
 *
 * @param {number} dividend - The integer to find the remainder of.
 * @param {number} divisor - The integer to divide by.
 * @returns {number} The integer remainder.
 * @see http://www.ecma-international.org/ecma-262/6.0/#sec-algorithm-conventions
 * @see https://en.wikipedia.org/wiki/Modulo_operation
 */

export default function modulo(dividend, divisor) {
  var remain = dividend % divisor;
  return floor(remain >= 0 ? remain : remain + divisor);
}
//# sourceMappingURL=modulo.js.map