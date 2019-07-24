/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _includes
 */

import _find from './_find';
import sameValueZero from '../sameValueZero';

export default function _includes(array, searchElement, ...fromIndex) {
  const isSameValueZero = function _isSameValueZero(value) {
    return sameValueZero(searchElement, value);
  };

  return _find(array, isSameValueZero, ...fromIndex).includes;
}
