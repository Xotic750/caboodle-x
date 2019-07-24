/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _methodize
 */
import _bind from './_bind';
var call = Function.call;
export default function _methodize(prototypeMethod) {
  return _bind(call, prototypeMethod);
}
//# sourceMappingURL=_methodize.js.map