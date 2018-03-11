/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module uniq
 */

import push from './.internal/push';
import includes from './.internal/arrayIncludes';
import reduce from './reduce';

export default function uniq(array) {
  return reduce(array, (acc, item) => {
    if (!includes(acc, item)) {
      push(acc, item);
    }

    return acc;
  }, []);
}
