/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isReservedEs5Identifier
 */

import es5ReservedNamesRx from 'src/es5ReservedNamesRx';
import isStringType from 'src/isStringType';

export default function isReservedEs5Identifier(value) {
  return isStringType(value) && es5ReservedNamesRx.test(value);
}
