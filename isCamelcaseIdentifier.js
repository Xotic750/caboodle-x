/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isCamelcaseIdentifier
 */

import isConstantIdentifier from './isConstantIdentifier';
import isValidIdentifier from './isValidIdentifier';
import isUnderscored from './isUnderscored';

export default function isCamelcaseIdentifier(string) {
  return isConstantIdentifier(string) || (isValidIdentifier(string) && !isUnderscored(string));
}
