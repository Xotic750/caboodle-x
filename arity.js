/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module arity
 */

import _assertIsFunction from './.internal/_assertIsFunction';
import _arity from './.internal/_arity';
import toWholeNumber from './toWholeNumber';

export default function arity(fn, ...n) {
  return _arity(
    _assertIsFunction(fn),
    toWholeNumber(n.length ? n[0] : fn.length),
  );
}
