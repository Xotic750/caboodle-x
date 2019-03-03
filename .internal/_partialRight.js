/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _partialRight
 */

import _call from './_call';
import _bound from './_bound';
import isPrimitive from '../isPrimitive';

export default function _partialRight(fn, ...partials) {
  let bound;

  const binder = function _binder(...args) {
    /* eslint-disable-next-line babel/no-invalid-this */
    const result = _call(fn, this, ...args, ...partials);

    /* eslint-disable-next-line babel/no-invalid-this */
    if (this instanceof bound) {
      /* eslint-disable-next-line babel/no-invalid-this */
      return isPrimitive(result) ? this : result;
    }

    return result;
  };

  bound = _bound(binder, 'PartialRight', fn.prototype, fn.length);

  return bound;
}
