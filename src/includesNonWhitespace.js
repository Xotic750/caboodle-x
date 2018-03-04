/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module includesNonWhitespace
 */

import {string} from 'white-space-x';

const nonWSregex = new RegExp(`[^${string}]`);

export default function includesNonWhitespace(value) {
  return nonWSregex.test(value);
}
