/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module defineValidatorProperty
 */

import isBoolean from 'is-boolean-object';
import toObject from './.internal/toObject';
import toBoolean from './.internal/toBoolean';
import defineProperty from './.internal/defineProperty';
import hasOwnProperty from './.internal/hasOwnProperty';
import surround from './surround';
import stubTrue from './stubTrue';
import assertIs from './assertIs';
import nilifyIs from './nilifyIs';
import assertIsFunctionType from './assertIsFunctionType';
import assertIsObject from './assertIsObject';
import reduceOwn from './reduceOwn';

const MSG1 = 'Not a valid initial value for ';
const MSG2 = 'Not a valid value for  ';
const MSG3 = 'Cannot assign to read-only property ';
const QUOTE = '"';

export default function defineValidatorProperty(object, property, descriptor) {
  assertIsObject(object);

  const objectDescriptor = toObject(descriptor);
  const props = reduceOwn(objectDescriptor, (acc, prop) => {
    if (hasOwnProperty(acc, prop)) {
      const value = objectDescriptor[prop];

      acc[prop] = isBoolean(acc[prop]) ? toBoolean(value) : value;
    }

    return acc;
  }, {
    configurable: true,
    enumerable: true,
    nilable: false,
    validator: stubTrue,
    value: undefined,
    writable: true,
  });

  assertIsFunctionType(props.validator);

  const isValidInitialValue = props.nilable ? nilifyIs(props.validator) : props.validator;
  const quotedProperty = surround(property, QUOTE);

  assertIs(isValidInitialValue, MSG1 + quotedProperty)(props.value);

  const isValidValue = assertIs(props.validator, MSG2 + quotedProperty);

  let currentValue = props.value;

  return defineProperty(object, property, {
    configurable: props.configurable,
    enumerable: props.enumerable,
    get() {
      return currentValue;
    },
    set(newValue) {
      if (!props.writable) {
        throw new TypeError(MSG3 + quotedProperty);
      }

      currentValue = isValidValue(newValue);

      return currentValue;
    },
  });
}
