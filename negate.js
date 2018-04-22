/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module negate
 */

import _negate from './.internal/_negate';
import assertIsFunction from './assertIsFunction';

export default function negate(predicate) {
  return _negate(assertIsFunction(predicate));
}
