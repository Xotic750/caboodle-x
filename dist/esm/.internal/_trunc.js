/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _trunc
 */
var ceil = Math.ceil,
    floor = Math.floor;
export default function _trunc(value) {
  return value < 0 ? ceil(value) : floor(value);
}
//# sourceMappingURL=_trunc.js.map