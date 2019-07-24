/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _createArgList
 */
import _String from './_String';
import _join from './_join';
import _push from './_push';
import _all from './_all';
var PRE = '$_';
var POST = '_$';
export default function _createArgList(length) {
  var array = [];

  var iteratee = function _iteratee(unused, index) {
    _push(array, PRE + _String(index) + POST);
  };

  _all({
    length: length
  }, iteratee);

  return _join(array, ',');
}
//# sourceMappingURL=_createArgList.js.map