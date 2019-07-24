function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _hasFakeSymbolIterator
 */
import isStringType from '../isStringType';
export default (typeof Symbol === "undefined" ? "undefined" : _typeof(Symbol)) === 'object' && isStringType(Symbol.iterator);
//# sourceMappingURL=_hasFakeSymbolIterator.js.map