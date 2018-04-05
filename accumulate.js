/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module accumulate
 */

import _assertIsFunction from './.internal/_assertIsFunction';
import toObject from './toObject';
import toWholeNumber from './toWholeNumber';
import _accumulate from './.internal/_accumulate';
import _fromIndex from './.internal/_fromIndex';

export default function accumulate(array, callback, ...rest) {
  const object = toObject(array);
  const length = toWholeNumber(object.length);
  if (!rest.length && length < 1) {
    throw new TypeError('accumulate of empty array with no initial value');
  }

  const start = _fromIndex(object, rest[1]);

  return _accumulate(
    object,
    _assertIsFunction(callback),
    (rest.length ? rest : object)[start],
    rest.length ? start : start + 1,
  );
}
