/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module defineValidatorProperty
 */

import isUndefined from './isUndefined';
import _isFunction from './.internal/_isFunction';
import assertIs from './assertIs';
import assertIsObject from './assertIsObjectLike';
import _has from './.internal/_hasOwnProperty';
import nilifyIs from './nilifyIs';
import surround from './surround';
import _Boolean from './.internal/_Boolean';
import _defineProperty from './.internal/_defineProperty';
import _Object from './.internal/_Object';
import _apply from './.internal/_apply';
import _call from './.internal/_call';
import toPropertyKey from './toPropertyKey';

const MSG1 = 'Not a valid initial value for ';
const MSG2 = 'Not a valid value for  ';

const toPropertyDescriptor = function _toPropertyDescriptor(desc) {
  const descriptor = {};

  if (_has(desc, 'enumerable')) {
    descriptor.enumerable = _Boolean(desc.enumerable);
  }

  if (_has(desc, 'configurable')) {
    descriptor.configurable = _Boolean(desc.configurable);
  }

  if (_has(desc, 'nilable')) {
    descriptor.nilable = _Boolean(desc.nilable);
  }

  if (_has(desc, 'validator')) {
    if (!isUndefined(desc.validator) && !_isFunction(desc.validator)) {
      throw new TypeError('validator must be a function');
    }

    descriptor.validator = desc.validator;
  }

  if (_has(desc, 'value')) {
    descriptor.value = desc.value;
  }

  if (_has(desc, 'writable')) {
    descriptor.writable = _Boolean(desc.writable);
  }

  if (_has(desc, 'get')) {
    if (!isUndefined(desc.get) && !_isFunction(desc.get)) {
      throw new TypeError('getter must be a function');
    }

    descriptor.get = desc.get;
  }

  if (_has(desc, 'set')) {
    if (!isUndefined(desc.set) && !_isFunction(desc.set)) {
      throw new TypeError('setter must be a function');
    }

    descriptor.set = desc.set;
  }

  if ((_has(descriptor, 'get') || _has(descriptor, 'set')) && (_has(descriptor, 'value') || _has(descriptor, 'writable'))) {
    throw new TypeError('Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');
  }

  return descriptor;
};

export default function defineValidatorProperty(object, property, descriptor) {
  assertIsObject(object);

  const prop = toPropertyKey(property);
  const props = toPropertyDescriptor(_Object(descriptor), defineValidatorProperty);
  const isValidInitialValue = props.nilable && props.validator ? nilifyIs(props.validator) : props.validator;
  const quotedProperty = surround(prop, '"');

  if (isValidInitialValue) {
    assertIs(isValidInitialValue, MSG1 + quotedProperty)(props.value);
  }

  const isValidValue = props.validator && assertIs(props.validator, MSG2 + quotedProperty);

  const validatorDesctiptor = {
    configurable: props.configurable,
    enumerable: props.enumerable,
  };

  if (props.get) {
    validatorDesctiptor.get = function get(...args) {
      return _apply(props.get, this, args);
    };
  } else if (isValidValue && _has(props, 'value')) {
    validatorDesctiptor.get = function get() {
      return props.value;
    };
  }

  if (props.set) {
    validatorDesctiptor.set = function set(newValue) {
      return _call(props.set, this, newValue);
    };
  } else if (_has(props, 'value')) {
    if (isValidValue && props.writable) {
      validatorDesctiptor.set = function set(newValue) {
        props.value = isValidValue(newValue);

        return props.value;
      };
    } else {
      validatorDesctiptor.value = props.value;

      if (_has(props, 'writable')) {
        validatorDesctiptor.writable = props.writable;
      }
    }
  }

  return _defineProperty(object, prop, validatorDesctiptor);
}
