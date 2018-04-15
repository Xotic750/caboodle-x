/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _partialRight
 */

import _call from './_call';
import _bound from './_bound';
import isPrimitive from '../isPrimitive';

export default function _partialRight(fn, ...partials) {
  return _bound(
    function _binder(...args) {
      const result = _call(fn, this, ...args, ...partials);

      if (this instanceof _bound) {
        return isPrimitive(result) ? this : result;
      }

      return result;
    },
    'PartialRight',
    fn.prototype,
    fn.length,
  );
}
