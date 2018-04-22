/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module trunc
 */

const {ceil, floor} = Math;

export default function trunc(value) {
  return value < 0 ? ceil(value) : floor(value);
}
