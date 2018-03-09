/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module constant
 */

import identity from 'src/identity';

export default function constant(value) {
  return identity.bind(null, value);
}
