/**
 * @file List of ECMAScript white space characters.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _trim
 */
import _trimLeft from './_trimLeft';
import _trimRight from './_trimRight';
export default function _trim(string) {
  return _trimRight(_trimLeft(string));
}
//# sourceMappingURL=_trim.js.map