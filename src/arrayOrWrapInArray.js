/**
 * @file Utility that assures a returned value of type Array.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module arrayOrWrapInArray
 */

/**
 * Takes a single, optional argument and then performs the following logic:
 * If an argument is supplied and is an array then it will be returned unchanged,
 * if an argument is supplied and is not an array then it will be wrapped in a new array and returned,
 * if no argument is supplied then a new empty array is returned.
 *
 * @param {Array|*} [args] - A single optional identity argument.
 * @returns {Array} An array as described the the description logic.
 */
export default function arrayOrWrapInArray(...args) {
  if (args.length < 1) {
    return [];
  }

  const [identity] = args;

  return Array.isArray(identity) ? identity : [identity];
}
