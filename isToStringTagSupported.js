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
export default isSymbolSupported && typeof isSymbolType(Symbol.toStringTag);
