/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module partialRight
 */

import assertIsFunction from './assertIsFunction';
import _partialRight from './.internal/_partialRight';

export default function partialRight(fn, ...partials) {
  return _partialRight(assertIsFunction(fn), ...partials);
}
