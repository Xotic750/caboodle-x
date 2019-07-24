/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _getSymbolIterator
 */
import isNil from '../isNil';
import SYMBOL_ITERATOR from '../symbolIterator';
import ES6_SHIM_SYMBOL_ITERATOR from './_es6ShimIterator';
import FALLBACK_SYMBOL_ITERATOR from './_fallbackSymbolIterator';
import _hasRealSymbolIterator from './_hasRealSymbolIterator';
import _hasFakeSymbolIterator from './_hasFakeSymbolIterator';
export default function _getSymbolIterator(iterable) {
  if (!isNil(iterable)) {
    if ((_hasRealSymbolIterator || _hasFakeSymbolIterator) && iterable[SYMBOL_ITERATOR]) {
      return SYMBOL_ITERATOR;
    }

    if (iterable[ES6_SHIM_SYMBOL_ITERATOR]) {
      return ES6_SHIM_SYMBOL_ITERATOR;
    }

    if (iterable[FALLBACK_SYMBOL_ITERATOR]) {
      return FALLBACK_SYMBOL_ITERATOR;
    }
  }

  return void 0;
}
//# sourceMappingURL=_getSymbolIterator.js.map