/**
 * @file Creates an array of shuffled values.
 * @copyright Copyright (c) 2018-present, Graham Fairweather
 * @module isError
 */
import _slice from './.internal/_slice';
import toObject from './toObject';
var floor = Math.floor,
    random = Math.random;
/**
 * Creates an array of shuffled values.
 *
 * @see https://en.wikipedia.org/wiki/Fisher-Yates_shuffle
 * @param {Array|object} array - The array to shuffle.
 * @throws {TypeError} If array is null or undefined.
 * @returns {Array} Returns the new shuffled array.
 */

export default function shuffle(array) {
  var arr = _slice(toObject(array));

  var index = arr.length;

  while (index > 0) {
    var rnd = floor(random() * index);
    index -= 1;
    var tmp = arr[index];
    arr[index] = arr[rnd];
    arr[rnd] = tmp;
  }

  return arr;
}
//# sourceMappingURL=shuffle.js.map