/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _partial
 */
import _call from './_call';
import _bound from './_bound';
import isPrimitive from '../isPrimitive';
export default function _partial(fn) {
  for (var _len = arguments.length, partials = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    partials[_key - 1] = arguments[_key];
  }

  var bound;

  var binder = function _binder() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    /* eslint-disable-next-line babel/no-invalid-this */
    var result = _call.apply(void 0, [fn, this].concat(partials, args));
    /* eslint-disable-next-line babel/no-invalid-this */


    if (this instanceof bound) {
      /* eslint-disable-next-line babel/no-invalid-this */
      return isPrimitive(result) ? this : result;
    }

    return result;
  };

  bound = _bound(binder, 'Partial', fn.prototype, fn.length - partials.length);
  return bound;
}
//# sourceMappingURL=_partial.js.map