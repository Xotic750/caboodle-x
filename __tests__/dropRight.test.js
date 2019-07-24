import {dropRight} from '../src/caboodle-x';
import falsey from './helpers/falsey';

const array = [1, 2, 3];

describe('dropRight', () => {
  it('for empty array', () => {
    expect(dropRight([])).toStrictEqual([]);
  });

  it('for empty string', () => {
    expect(dropRight('')).toBe('');
  });

  it('should dropRight the last element', () => {
    const set = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const actual = set.map((x) => dropRight(x));

    expect(actual).toStrictEqual([[1, 2], [4, 5], [7, 8]]);
  });

  it('should dropRight the last element of strings', () => {
    const set = ['abc', 'def', 'ghi'];
    const actual = set.map((x) => dropRight(x));

    expect(actual).toStrictEqual(['ab', 'de', 'gh']);
  });

  it('should dropRight the last two elements', () => {
    const set = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const actual = set.map((x) => dropRight(x, 2));

    expect(actual).toStrictEqual([[1], [4], [7]]);
  });

  it('should dropRight the last two elements of strings', () => {
    const set = ['abc', 'def', 'ghi'];
    const actual = set.map((x) => dropRight(x, 2));

    expect(actual).toStrictEqual(['a', 'd', 'g']);
  });

  it('should treat falsey `n` values as `0`', () => {
    const expected = falsey.map(() => array);
    const actual = falsey.map((n) => dropRight(array, n));

    expect(actual).toStrictEqual(expected);
  });

  it('should return all elements when `n` < `1`', () => {
    [0, -1, -Infinity].forEach((n) => {
      expect(dropRight(array, n)).toStrictEqual(array);
    });
  });

  it('should return an empty array when `n` >= `array.length`', () => {
    [3, 4, 2 ** 32, Infinity].forEach((n) => {
      expect(dropRight(array, n)).toStrictEqual([]);
    });
  });

  it('should coerce `n` to an integer', () => {
    expect(dropRight(array, 1.6)).toStrictEqual([1, 2]);
    expect(dropRight(array, 2.6)).toStrictEqual([1]);
  });
});
