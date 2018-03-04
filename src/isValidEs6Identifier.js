/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isValidEs6Identifier
 */

import es6IdentifierRx from 'src/es6IdentifierRx';
import isStringType from 'src/isStringType';

export default function isValidEs6Identifier(value) {
  return isStringType(value) && es6IdentifierRx.test(value);
}
