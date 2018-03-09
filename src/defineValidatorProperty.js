/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module defineValidatorProperty
 */

import stubTrue from 'src/stubTrue';
import assertIs from 'src/assertIs';
import nilifyIs from 'src/nilifyIs';
import assertIsFunctionType from 'src/assertIsFunctionType';
import assertIsObject from 'src/assertIsObject';

const toPropertyDescriptor = function _toPropertyDescriptor(desc) {
  const object = Object(desc);
  const descriptor = {
    configurable: true,
    enumerable: true,
    nilable: false,
    validator: stubTrue,
    value: undefined,
    writable: true,
  };

  if ('enumerable' in object) {
    descriptor.enumerable = !!object.enumerable;
  }

  if ('configurable' in object) {
    descriptor.configurable = !!object.configurable;
  }

  if ('nilable' in object) {
    descriptor.configurable = !!object.nilable;
  }

  if ('value' in object) {
    descriptor.value = object.value;
  }

  if ('validator' in object) {
    descriptor.configurable = object.validator;
  }

  if ('writable' in object) {
    descriptor.writable = !!object.writable;
  }

  return descriptor;
};

export default function defineValidatorProperty(object, property, descriptor) {
  assertIsObject(object);

  const propDesc = toPropertyDescriptor(descriptor);

  assertIsFunctionType(propDesc.validator);

  const isValidInitialValue = propDesc.nilable ? nilifyIs(propDesc.validator) : propDesc.validator;

  assertIs(isValidInitialValue, `Not a valid initial value for "${property}".`)(propDesc.value);

  const isValidValue = assertIs(propDesc.validator, `Not a valid value for "${property}".`);

  let currentValue = propDesc.value;

  return Object.defineProperty(object, property, {
    configurable: propDesc.configurable,
    enumerable: propDesc.enumerable,
    get() {
      return currentValue;
    },
    set(newValue) {
      if (!propDesc.writable) {
        throw new TypeError(`Cannot assign to read only property "${property}" of object "#<Object>"`);
      }

      currentValue = isValidValue(newValue);

      return currentValue;
    },
  });
}
