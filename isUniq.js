/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isUniq
 */

import uniq from './uniq';

export default function isUniq(array) {
  return uniq(array).length === array.length;
}
