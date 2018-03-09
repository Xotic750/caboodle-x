/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module uniq
 */

import sameValueZero from 'src/sameValueZero';

const reducer = function _reducer(acc, item) {
  const predicate = sameValueZero.bind(null, item);

  if (acc.findIndex(predicate) === -1) {
    acc.push(item);
  }

  return acc;
};

export default function uniq(array) {
  return Array.isArray(array) ? array.reduce(reducer, []) : [];
}
