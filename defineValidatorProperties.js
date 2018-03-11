/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module defineValidatorProperties
 */

import toObject from './.internal/toObject';
import defineValidatorProperty from './defineValidatorProperty';
import assertIsObject from './assertIsObject';
import forOwn from './forOwn';

export default function defineValidatorProperties(object, properties) {
  assertIsObject(object);

  const props = toObject(properties);

  forOwn(props, property => defineValidatorProperty(object, property, props[property]));

  return object;
}
