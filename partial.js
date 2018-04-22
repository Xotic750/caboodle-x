/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module partial
 */

import assertIsFunction from './assertIsFunction';
import _partial from './.internal/_partial';

export default function partial(fn, ...partials) {
  return _partial(assertIsFunction(fn), ...partials);
}
