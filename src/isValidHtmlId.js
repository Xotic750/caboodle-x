/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isValidHtmlId
 */

import isStringType from 'src/isStringType';
import isSpaced from 'src/isSpaced';

export default function isValidHtmlId(value) {
  return isStringType(value) && value.length > 0 && !isSpaced(value);
}
