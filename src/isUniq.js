/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isUniq
 */

import uniq from 'src/uniq';

export default function isUniq(array) {
  return Array.isArray(array) && uniq(array).length === array.length;
}
