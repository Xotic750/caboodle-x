/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _hasFakeSymbolIterator
 */

import isStringType from '../isStringType';

export default typeof Symbol === 'object' && isStringType(Symbol.iterator);
