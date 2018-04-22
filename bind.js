/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module bind
 */

import assertIsFunction from './assertIsFunction';
import _bind from './.internal/_bind';

export default function bind(fn, ...bindArgs) {
  return _bind(assertIsFunction(fn), ...bindArgs);
}
