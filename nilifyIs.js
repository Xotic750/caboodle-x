/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module nilifyIs
 */

import assertIsFunction from './assertIsFunction';
import _call from './.internal/_call';
import isNil from './isNil';

export default function nilifyIs(predicate) {
  assertIsFunction(predicate);

  return function nilifiedBound(value, ...rest) {
    return isNil(value) || _call(predicate, this, value, ...rest);
  };
}
