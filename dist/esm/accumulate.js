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
export default function accumulate(array, callback) {
  var object = toObject(array);
  var length = toWholeNumber(object.length);

  for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    rest[_key - 2] = arguments[_key];
  }

  if (!rest.length && length < 1) {
    throw new TypeError('accumulate of empty array with no initial value');
  }

  var start = _fromIndex(object, rest[1]);

  return _accumulate(object, _assertIsFunction(callback), (rest.length ? rest : object)[start], rest.length ? start : start + 1);
}
//# sourceMappingURL=accumulate.js.map