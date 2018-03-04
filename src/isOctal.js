/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isOctal
 */

const octalRegex = /^0o[0-7]+$/i;

export default function isOctal(value) {
  return octalRegex.test(value);
}
