/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module assertIs
 */

import _assertIs from './.internal/_assertIs';
import _isFunction from './.internal/_isFunction';

export default function assertIs(predicate, defaultMessage) {
  if (!_isFunction(predicate)) {
    throw new TypeError('Predicate must be a function');
  }

  return _assertIs(predicate, defaultMessage);
}
