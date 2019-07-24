/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _hasToStringTag
 */
import isSymbolSupported from '../isSymbolSupported';
import isSymbolType from '../isSymbolType';
export default isSymbolSupported && isSymbolType(Symbol.toStringTag);
//# sourceMappingURL=_hasToStringTag.js.map