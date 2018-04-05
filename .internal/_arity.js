/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _arity
 */

import _apply from './_apply';
import _slice from './_slice';
import _bound from './_bound';
import isPrimitive from '../isPrimitive';

export default function _arity(fn, ...arity) {
  const length = arity.length ? arity[0] : fn.length;
  let bound;

  const binder = function _binder(...args) {
    const result = _apply(fn, this, _slice(args, 0, length));

    if (this instanceof bound) {
      return isPrimitive(result) ? this : result;
    }

    return result;
  };

  bound = _bound(binder, 'Arity', fn.prototype, length);

  return bound;
}
