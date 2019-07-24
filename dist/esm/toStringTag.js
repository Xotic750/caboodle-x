/**
 * @file Get an object's ES6 @@toStringTag.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module toStringTag
 */
import _methodize from './.internal/_methodize';
/**
 * The `toStringTag` method returns "[object type]", where type is the
 * object type.
 *
 * @param {*} value - The object of which to get the object type string.
 * @returns {string} The object type string.
 */

export default _methodize(Object.prototype.toString);
//# sourceMappingURL=toStringTag.js.map