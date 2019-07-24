/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _arity
 */
import _apply from './_apply';
import _slice from './_slice';
import _bound from './_bound';
import isPrimitive from '../isPrimitive';
export default function _arity(fn) {
  var length = (arguments.length <= 1 ? 0 : arguments.length - 1) ? arguments.length <= 1 ? undefined : arguments[1] : fn.length;
  var bound;

  var binder = function _binder() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /* eslint-disable-next-line babel/no-invalid-this */
    var result = _apply(fn, this, _slice(args, 0, length));
    /* eslint-disable-next-line babel/no-invalid-this */


    if (this instanceof bound) {
      /* eslint-disable-next-line babel/no-invalid-this */
      return isPrimitive(result) ? this : result;
    }

    return result;
  };

  bound = _bound(binder, 'Arity', fn.prototype, length);
  return bound;
}
//# sourceMappingURL=_arity.js.map