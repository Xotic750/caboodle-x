/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _createArgList
 */

import _String from './_String';
import _join from './_join';
import _push from './_push';
import _all from './_all';

const PRE = '$_';
const POST = '_$';

export default function _createArgList(length) {
  const array = [];

  _all({length}, function _iteratee(unused, index) {
    _push(array, PRE + _String(index) + POST);
  });

  return _join(array, ',');
}
