/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isUpperCased
 */

import isString from 'is-string';
import _toUpperCase from './.internal/_toUpperCase';
import toStr from './toString';

export default function isUpperCased(string) {
  return isString(string) && _toUpperCase(string) === toStr(string);
}
