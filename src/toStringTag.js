/**
 * @file Get an object's ES6 @@toStringTag.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module toStringTag
 */

import isNull from 'src/isNull';
import isUndefined from 'src/isUndefined';

const toStr = Object.prototype.toString;

/**
 * The `toStringTag` method returns "[object type]", where type is the
 * object type.
 *
 * @param {*} value - The object of which to get the object type string.
 * @returns {string} The object type string.
 */
export default function toStringTag(value) {
  if (isNull(value)) {
    return '[object Null]';
  }

  if (isUndefined(value)) {
    return '[object Undefined]';
  }

  return toStr.call(value);
}
