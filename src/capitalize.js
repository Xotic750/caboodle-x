/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module capitalize
 */

import ES from 'es-abstract';

export default function capitalize(property) {
  const str = ES.ToString(property);

  return str.charAt(0).toUpperCase() + str.slice(1).toLocaleLowerCase();
}
