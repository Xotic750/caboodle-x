/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _argsToArray
 */

import _push from './_push';
import _all from './_all';

export default function _argsToArray(args) {
  const array = [];

  _all(args, function _iteratee(arg) {
    _push(array, arg);
  });

  return array;
}
