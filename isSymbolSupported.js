/**
 * @file Tests if ES6 Symbol is supported.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isSymbolSupported
 */

/**
 * Indicates if `Symbol`exists and creates the correct type.
 * `true`, if it exists and creates the correct type, otherwise `false`.
 */

import isSymbolType from './isSymbolType';

export default typeof Symbol === 'function' && isSymbolType(Symbol('x'));
