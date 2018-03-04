/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isReservedEs6Identifier
 */

import es6ReservedNamesRx from 'src/es6ReservedNamesRx';
import isStringType from 'src/isStringType';

export default function isReservedEs6Identifier(value) {
  return isStringType(value) && es6ReservedNamesRx.test(value);
}
