import {final} from '../index';

const noop = () => {};

describe('final', () => {
  it('should throw when target is null or undefined', () => {
    expect(() => {
      final();
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      final(undefined);
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      final(null);
    }).toThrowErrorMatchingSnapshot();
  });

  it('should return undefined for no-arrayLike', () => {
    const falsey = [false, 0, NaN];
    const expected = falsey.map(noop);
    const actual = falsey.map(final);

    expect(actual).toEqual(expected);
  });

  it('should exclude first element', () => {
    const array = [1, 2, 3];

    expect(final(array)).toEqual([2, 3]);
  });

  it('should return an empty when querying empty arrays', () => {
    expect(final([])).toEqual([]);
  });

  it('should work as an iteratee for methods like `map`', () => {
    const array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const actual = array.map(final);

    expect(actual).toEqual([[2, 3], [5, 6], [8, 9]]);
  });

  it('should work for strings', () => {
    const array = ['123', '456', '789', ''];
    const actual = array.map(final);

    expect(actual).toEqual(['23', '56', '89', '']);
  });
});
