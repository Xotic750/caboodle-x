/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module arity
 */

import assertIsFunction from './assertIsFunction';
import _arity from './.internal/_arity';
import toWholeNumber from './toWholeNumber';

export default function arity(fn, ...n) {
  return _arity(
    assertIsFunction(fn),
    toWholeNumber(n.length ? n[0] : fn.length),
  );
}
