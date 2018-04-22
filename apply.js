/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module apply
 */

import assertIsFunction from './assertIsFunction';
import _apply from './.internal/_apply';

export default function apply(fn, ...applyArgs) {
  return _apply(assertIsFunction(fn), ...applyArgs);
}
