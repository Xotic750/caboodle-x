/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module uniq
 */

export default function uniq(array) {
  return Array.isArray(array) ? [...new Set(array)] : [];
}
