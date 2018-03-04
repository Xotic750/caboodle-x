/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isBinary
 */

const binaryRegex = /^0b[01]+$/i;

export default function isBinary(value) {
  return binaryRegex.test(value);
}
