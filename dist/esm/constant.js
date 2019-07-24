/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module constant
 */
export default function constant(value) {
  return function boundConstant() {
    return value;
  };
}
//# sourceMappingURL=constant.js.map