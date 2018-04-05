/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module apply
 */

import _assertIsFunction from './.internal/_assertIsFunction';
import _apply from './.internal/_apply';

export default function apply(fn, ...applyArgs) {
  return _apply(_assertIsFunction(fn), ...applyArgs);
}
