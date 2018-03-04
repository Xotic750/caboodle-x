/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module kebabJoin
 */

import ES from 'es-abstract';

export default function kebabJoin(...args) {
  return args.map(ES.ToString).join('-');
}
