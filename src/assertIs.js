/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module assertIs
 */

import ES from 'es-abstract';

export default function assertIs(...args) {
  const [predicate, defaultMessage] = args;

  if (!ES.IsCallable(predicate)) {
    throw new TypeError('Predicate must be a function.');
  }

  const defMsg = args.length > 1 ? ES.ToString(defaultMessage) : 'Not a valid value.';

  return function assertIsBound(...boundArgs) {
    const [value, customMessage] = boundArgs;

    if (!predicate.call(this, value)) {
      const message = boundArgs.length > 1 ? ES.ToString(customMessage) : defMsg;

      throw new TypeError(message);
    }

    return value;
  };
}
