/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isCamecaseIdentifier
 */

import isConstantIdentifier from 'src/isConstantIdentifier';
import isValidIdentifier from 'src/isValidIdentifier';
import isUnderscored from 'src/isUnderscored';

export default function isCamecaseIdentifier(value) {
  return isConstantIdentifier(value) || (isValidIdentifier(value) && !isUnderscored(value));
}
