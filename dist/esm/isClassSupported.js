/**
 * @file Determine whether a given value is a function object.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isClassSupported
 */
import attempt from './attempt';
/* eslint-disable-next-line no-new-func */

export default !attempt(Function('"use strict"; return class My {};')).threw;
//# sourceMappingURL=isClassSupported.js.map