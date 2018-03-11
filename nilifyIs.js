/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module nilifyIs
 */

import call from './.internal/call';
import assertIsFunctionType from './assertIsFunctionType';
import isNil from './isNil';

export default function nilifyIs(predicate) {
  assertIsFunctionType(predicate);

  return function nilifiedBound(value, ...rest) {
    return isNil(value) || call(predicate, this, value, ...rest);
  };
}
