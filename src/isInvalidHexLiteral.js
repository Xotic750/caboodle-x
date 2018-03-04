/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isInvalidHexLiteral
 */

const invalidHexLiteral = /^[-+]0x[0-9a-f]+$/i;

export default function isInvalidHexLiteral(value) {
  return invalidHexLiteral.test(value);
}
