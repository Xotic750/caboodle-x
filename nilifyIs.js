/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module nilifyIs
 */

import _assertIsFunction from './.internal/_assertIsFunction';
import _call from './.internal/_call';
import isNil from './isNil';

export default function nilifyIs(predicate) {
  _assertIsFunction(predicate);

  return function nilifiedBound(value, ...rest) {
    /* eslint-disable-next-line babel/no-invalid-this */
    return isNil(value) || _call(predicate, this, value, ...rest);
  };
}
