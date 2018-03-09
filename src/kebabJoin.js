/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module kebabJoin
 */

export default function kebabJoin(...args) {
  return args.map(String).join('-');
}
