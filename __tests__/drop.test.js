import {drop} from '../dist/caboodle-x';
import falsey from './helpers/falsey';

const array = [1, 2, 3];

describe('drop', () => {
  it('for empty array', () => {
    expect(drop([])).toEqual([]);
  });

  it('for empty string', () => {
    expect(drop('')).toBe('');
  });

  it('should drop the first element', () => {
    const set = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const actual = set.map(x => drop(x));

    expect(actual).toEqual([[2, 3], [5, 6], [8, 9]]);
  });

  it('should drop the first element of strings', () => {
    const set = ['abc', 'def', 'ghi'];
    const actual = set.map(x => drop(x));

    expect(actual).toEqual(['bc', 'ef', 'hi']);
  });

  it('should drop the first two elements', () => {
    const set = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const actual = set.map(x => drop(x, 2));

    expect(actual).toEqual([[3], [6], [9]]);
  });

  it('should drop the first two elements of strings', () => {
    const set = ['abc', 'def', 'ghi'];
    const actual = set.map(x => drop(x, 2));

    expect(actual).toEqual(['c', 'f', 'i']);
  });

  it('should treat falsey `n` values as `0`', () => {
    const expected = falsey.map(() => array);
    const actual = falsey.map(n => drop(array, n));

    expect(actual).toEqual(expected);
  });

  it('should return all elements when `n` < `1`', () => {
    [0, -1, -Infinity].forEach(n => {
      expect(drop(array, n)).toEqual(array);
    });
  });

  it('should return an empty array when `n` >= `array.length`', () => {
    [3, 4, 2 ** 32, Infinity].forEach(n => {
      expect(drop(array, n)).toEqual([]);
    });
  });

  it('should coerce `n` to an integer', () => {
    expect(drop(array, 1.6)).toEqual([2, 3]);
    expect(drop(array, 2.6)).toEqual([3]);
  });
});
