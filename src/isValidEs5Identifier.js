/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isValidEs5Identifier
 */

import es5IdentifierRx from 'src/es5IdentifierRx';
import isStringType from 'src/isStringType';

export default function isValidEs5Identifier(value) {
  return isStringType(value) && es5IdentifierRx.test(value);
}
