/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module assertIsFunction
 */

import _assertIs from './.internal/_assertIs';
import isFunction from './isFunction';

const asserter = _assertIs(isFunction, 'Not a function');

export default function assertIsFunction(value, ...customMessage) {
  return asserter(value, ...customMessage);
}
