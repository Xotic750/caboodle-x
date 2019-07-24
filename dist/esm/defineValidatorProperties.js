/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module defineValidatorProperties
 */
import assertIsObject from './assertIsObjectLike';
import defineValidatorProperty from './defineValidatorProperty';
import toObject from './toObject';
import _all from './.internal/_all';
import _keys from './.internal/_keys';
import toPropertyKey from './toPropertyKey';
export default function defineValidatorProperties(object, properties) {
  assertIsObject(object);
  var props = toObject(properties);

  var callback = function _callback(currentValue) {
    defineValidatorProperty(object, toPropertyKey(currentValue), props[currentValue]);
  };

  _all(_keys(props), callback);

  return object;
}
//# sourceMappingURL=defineValidatorProperties.js.map