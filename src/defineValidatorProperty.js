/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module defineValidatorProperty
 */

import ES from 'es-abstract';
import stubTrue from 'src/stubTrue';
import assertIs from 'src/assertIs';
import nilifyIs from 'src/nilifyIs';
import assertIsCallable from 'src/assertIsCallable';
import assertIsObject from 'src/assertIsObject';

const toPropertyDescriptor = function _toPropertyDescriptor(desc) {
  const object = ES.ToObject(desc);
  const descriptor = {
    configurable: true,
    enumerable: true,
    nilable: false,
    validator: stubTrue,
    value: undefined,
    writable: true,
  };

  if (Reflect.has(object, 'enumerable')) {
    descriptor.enumerable = ES.ToBoolean(object.enumerable);
  }

  if (Reflect.has(object, 'configurable')) {
    descriptor.configurable = ES.ToBoolean(object.configurable);
  }

  if (Reflect.has(object, 'nilable')) {
    descriptor.configurable = ES.ToBoolean(object.nilable);
  }

  if (Reflect.has(object, 'value')) {
    descriptor.value = object.value;
  }

  if (Reflect.has(object, 'validator')) {
    descriptor.configurable = object.validator;
  }

  if (Reflect.has(object, 'writable')) {
    descriptor.writable = ES.ToBoolean(object.writable);
  }

  return descriptor;
};

export default function defineValidatorProperty(object, property, descriptor) {
  assertIsObject(object);

  const propKey = ES.ToPropertyKey(property);
  const {
    configurable,
    enumerable,
    nilable,
    validator,
    value,
    writable,
  } = toPropertyDescriptor(descriptor);

  assertIsCallable(validator);

  const isValidInitialValue = nilable ? nilifyIs(validator) : validator;

  assertIs(isValidInitialValue, `Not a valid initial value for "${propKey}".`)(value);

  const isValidValue = assertIs(validator, `Not a valid value for "${propKey}".`);

  let currentValue = value;

  return Object.defineProperty(object, propKey, {
    configurable,
    enumerable,
    get() {
      return currentValue;
    },
    set(newValue) {
      if (!writable) {
        throw new TypeError(`Cannot assign to read only property "${propKey}" of object "#<Object>"`);
      }

      currentValue = isValidValue(newValue);

      return currentValue;
    },
  });
}
