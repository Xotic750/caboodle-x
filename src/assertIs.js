/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module assertIs
 */

import isFunctionType from 'src/isFunctionType';

export default function assertIs(...args) {
  const [predicate, defaultMessage] = args;

  if (!isFunctionType(predicate)) {
    throw new TypeError('Predicate must be a function.');
  }

  const defMsg = args.length > 1 ? `${defaultMessage}` : 'Not a valid value.';

  return function assertIsBound(...boundArgs) {
    const [value, customMessage] = boundArgs;

    if (!predicate.call(this, value)) {
      const message = boundArgs.length > 1 ? `${customMessage}` : defMsg;

      throw new TypeError(message);
    }

    return value;
  };
}
