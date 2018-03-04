/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module nilifyIs
 */

import assertIsCallable from 'src/assertIsCallable';
import isNil from 'src/isNil';

export default function nilifyIs(predicate) {
  assertIsCallable(predicate);

  return function nulifiedBound(...args) {
    const [value] = args;

    return isNil(value) || predicate.call(this, ...args);
  };
}
