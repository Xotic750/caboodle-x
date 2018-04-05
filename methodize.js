/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module methodize
 */

import _methodize from './.internal/_methodize';
import _assertIsFunction from './.internal/_assertIsFunction';

export default function methodize(prototypeMethod) {
  return _methodize(_assertIsFunction(prototypeMethod));
}
