/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module call
 */

import assertIsFunction from './assertIsFunction';
import _call from './.internal/_call';

export default function call(fn, ...callArgs) {
  return _call(assertIsFunction(fn), ...callArgs);
}
