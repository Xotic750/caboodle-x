/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module capitalizeFirst
 */

export default function capitalizeFirst(property) {
  const str = `${property}`;

  return str.charAt(0).toUpperCase() + str.slice(1);
}
