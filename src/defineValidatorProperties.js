/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module defineValidatorProperties
 */

import ES from 'es-abstract';
import defineValidatorProperty from 'src/defineValidatorProperty';
import assertIsObject from 'src/assertIsObject';

export default function defineValidatorProperties(object, properties) {
  assertIsObject(object);

  const props = ES.ToObject(properties);

  Object.keys(props).forEach((property) => {
    if (property !== '__proto__') {
      defineValidatorProperty(object, property, props[property]);
    }
  });

  return object;
}
