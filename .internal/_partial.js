/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _partial
 */

import _call from './_call';
import _bound from './_bound';
import isPrimitive from '../isPrimitive';

export default function _partial(fn, ...partials) {
  return _bound(
    function _binder(...args) {
      const result = _call(fn, this, ...partials, ...args);

      if (this instanceof _bound) {
        return isPrimitive(result) ? this : result;
      }

      return result;
    },
    'Partial',
    fn.prototype,
    fn.length - partials.length,
  );
}
