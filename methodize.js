/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module methodize
 */

import _methodize from './.internal/_methodize';
import assertIsFunction from './assertIsFunction';

export default function methodize(prototypeMethod) {
  return _methodize(assertIsFunction(prototypeMethod));
}
