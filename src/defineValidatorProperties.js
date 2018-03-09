/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module defineValidatorProperties
 */

import defineValidatorProperty from 'src/defineValidatorProperty';
import assertIsObject from 'src/assertIsObject';

export default function defineValidatorProperties(object, properties) {
  assertIsObject(object);

  const props = Object(properties);
  const definer = function _definer(property) {
    if (property !== '__proto__') {
      defineValidatorProperty(object, property, props[property]);
    }
  };

  Object.keys(props).forEach(definer);

  return object;
}
