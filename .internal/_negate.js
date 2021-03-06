/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _negate
 */

import _apply from './_apply';

export default function _negate(predicate) {
  return function boundNegate(...args) {
    return !_apply(predicate, this, args);
  };
}
