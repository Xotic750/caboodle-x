/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _hasRealSymbolIterator
 */
import isSymbolSupported from '../isSymbolSupported';
import isSymbolType from '../isSymbolType';
export default isSymbolSupported && isSymbolType(Symbol.iterator);
//# sourceMappingURL=_hasRealSymbolIterator.js.map