import {drop} from 'src/caboodle-x';

import falsey from './helpers/falsey';

const array = [1, 2, 3];

describe('drop', () => {
  it('should throw when array is null or undefined', () => {
    expect(() => {
      drop();
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      drop(undefined);
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      drop(null);
    }).toThrowErrorMatchingSnapshot();
  });

  it('should be undefined if not arraylike', () => {
    expect(drop({})).toStrictEqual(undefined);
    expect(drop(() => {})).toStrictEqual(undefined);
    expect(drop(/rx/)).toStrictEqual(undefined);
  });

  it('for empty array', () => {
    expect(drop([])).toStrictEqual([]);
  });

  it('for empty string', () => {
    expect(drop('')).toBe('');
  });

  it('should drop the first element', () => {
    const set = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const actual = set.map((x) => drop(x));

    expect(actual).toStrictEqual([[2, 3], [5, 6], [8, 9]]);
  });

  it('should drop the first element of strings', () => {
    const set = ['abc', 'def', 'ghi'];
    const actual = set.map((x) => drop(x));

    expect(actual).toStrictEqual(['bc', 'ef', 'hi']);
  });

  it('should drop the first two elements', () => {
    const set = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const actual = set.map((x) => drop(x, 2));

    expect(actual).toStrictEqual([[3], [6], [9]]);
  });

  it('should drop the first two elements of strings', () => {
    const set = ['abc', 'def', 'ghi'];
    const actual = set.map((x) => drop(x, 2));

    expect(actual).toStrictEqual(['c', 'f', 'i']);
  });

  it('should treat falsey `n` values as `0`', () => {
    const expected = falsey.map(() => array);
    const actual = falsey.map((n) => drop(array, n));

    expect(actual).toStrictEqual(expected);
  });

  it('should return all elements when `n` < `1`', () => {
    [0, -1, -Infinity].forEach((n) => {
      expect(drop(array, n)).toStrictEqual(array);
    });
  });

  it('should return an empty array when `n` >= `array.length`', () => {
    [3, 4, 2 ** 32, Infinity].forEach((n) => {
      expect(drop(array, n)).toStrictEqual([]);
    });
  });

  it('should coerce `n` to an integer', () => {
    expect(drop(array, 1.6)).toStrictEqual([2, 3]);
    expect(drop(array, 2.6)).toStrictEqual([3]);
  });
});
