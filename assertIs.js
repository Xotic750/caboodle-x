/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module assertIs
 */

import call from './.internal/call';
import toString from './.internal/toString';

import isFunctionType from './isFunctionType';

export default function assertIs(predicate, defaultMessage) {
  if (!isFunctionType(predicate)) {
    throw new TypeError('Predicate must be a function.');
  }

  const defMsg = defaultMessage ? toString(defaultMessage) : 'Not a valid value.';

  return function assertIsBound(value, customMessage) {
    if (!call(predicate, this, value)) {
      throw new TypeError(customMessage ? toString(customMessage) : defMsg);
    }

    return value;
  };
}
