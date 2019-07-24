/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _uniq
 */
import _includes from './_includes';
import _push from './_push';
import _reduce from './_reduce';

var callback = function _callback(accumulator, currentValue) {
  if (!_includes(accumulator, currentValue)) {
    _push(accumulator, currentValue);
  }

  return accumulator;
};

export default function _uniq(array) {
  return _reduce(array, callback, []);
}
//# sourceMappingURL=_uniq.js.map