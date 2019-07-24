/**
 * @file Utility that needs description.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module _squeeze
 */
import _filter from './_filter';
import stubTrue from '../stubTrue';
export default function _squeeze(array) {
  return _filter(array, stubTrue);
}
//# sourceMappingURL=_squeeze.js.map