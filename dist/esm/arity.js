/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module arity
 */
import _assertIsFunction from './.internal/_assertIsFunction';
import _arity from './.internal/_arity';
import toWholeNumber from './toWholeNumber';
export default function arity(fn) {
  return _arity(_assertIsFunction(fn), toWholeNumber((arguments.length <= 1 ? 0 : arguments.length - 1) ? arguments.length <= 1 ? undefined : arguments[1] : fn.length));
}
//# sourceMappingURL=arity.js.map