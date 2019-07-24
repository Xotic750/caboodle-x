/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _methodize
 */

import _bind from './_bind';

const {call} = Function;

export default function _methodize(prototypeMethod) {
  return _bind(call, prototypeMethod);
}
