/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _any
 */

import _fromIndex from './_fromIndex';
import toObject from '../toObject';
import toWholeNumber from '../toWholeNumber';

export default function _any(array, callback, ...fromIndex) {
  const object = toObject(array);
  const length = toWholeNumber(object.length);

  if (length) {
    for (let index = _fromIndex(object, fromIndex[0]); index < length; index += 1) {
      if (callback(object[index], index, object)) {
        return true;
      }
    }
  }

  return false;
}
