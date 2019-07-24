/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module symbolIterator
 */
import _Array from './.internal/_Array';
import isFunction from './isFunction';
import ES6_SHIM_SYMBOL_ITERATOR from './.internal/_es6ShimIterator';
import FALLBACK_SYMBOL_ITERATOR from './.internal/_fallbackSymbolIterator';
import _hasRealSymbolIterator from './.internal/_hasRealSymbolIterator';
import _hasFakeSymbolIterator from './.internal/_hasFakeSymbolIterator';
export default (function _getSymIt() {
  if (_hasRealSymbolIterator || _hasFakeSymbolIterator) {
    return Symbol.iterator;
  }

  return isFunction(_Array.prototype[ES6_SHIM_SYMBOL_ITERATOR]) ? ES6_SHIM_SYMBOL_ITERATOR : FALLBACK_SYMBOL_ITERATOR;
})();
//# sourceMappingURL=symbolIterator.js.map