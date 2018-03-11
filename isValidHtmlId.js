/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isValidHtmlId
 */

import isString from 'is-string';
import isSpaced from './isSpaced';

export default function isValidHtmlId(string) {
  return isString(string) && string.length > 0 && !isSpaced(string);
}
