function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * @file Tests if ES6 @@toStringTag is supported.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isToStringTagSupported
 */
import isSymbolSupported from './isSymbolSupported';
import isSymbolType from './isSymbolType';
/**
 * Indicates if `Symbol.toStringTag`exists and is the correct type.
 * `true`, if it exists and is the correct type, otherwise `false`.
 *
 * @type boolean
 */

export default isSymbolSupported && _typeof(isSymbolType(Symbol.toStringTag));
/* eslint-disable-line compat/compat */
//# sourceMappingURL=isToStringTagSupported.js.map