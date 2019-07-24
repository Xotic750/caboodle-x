/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _bound
 */

import _apply from './_apply';
import _argsToArray from './_argsToArray';
import _createArgList from './_createArgList';
import _create from './_create';
import _Function from './_Function';

export default function _bound(binder, name, prototype, length) {
  const bound = _Function(
    'binder',
    '_apply',
    '_argsToArray',
    `return function bound${name}(${_createArgList(length)}){ return _apply(binder,this,_argsToArray(arguments)); }`,
  )(binder, _apply, _argsToArray);

  if (prototype) {
    bound.prototype = _create(prototype);
  }

  return bound;
}
