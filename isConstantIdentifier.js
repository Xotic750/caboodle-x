/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isConstantIdentifier
 */

import isString from 'is-string';
import toUpperCase from './.internal/toUpperCase';
import isValidIdentifier from './isValidIdentifier';

export default function isConstantIdentifier(string) {
  return isString(string) && toUpperCase(string) === string && isValidIdentifier(string);
}
