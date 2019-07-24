import {initial} from '../src/caboodle-x';

const noop = () => {};

describe('initial', () => {
  it('should throw when target is null or undefined', () => {
    expect(() => {
      initial();
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      initial(undefined);
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      initial(null);
    }).toThrowErrorMatchingSnapshot();
  });

  it('should return undefined for no-arrayLike', () => {
    const falsey = [false, 0, NaN];
    const expected = falsey.map(noop);
    const actual = falsey.map(initial);

    expect(actual).toStrictEqual(expected);
  });

  it('should exclude last element', () => {
    const array = [1, 2, 3];

    expect(initial(array)).toStrictEqual([1, 2]);
  });

  it('should return an empty when querying empty arrays', () => {
    expect(initial([])).toStrictEqual([]);
  });

  it('should work as an iteratee for methods like `map`', () => {
    const array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const actual = array.map(initial);

    expect(actual).toStrictEqual([[1, 2], [4, 5], [7, 8]]);
  });

  it('should work for strings', () => {
    const array = ['123', '456', '789', ''];
    const actual = array.map(initial);

    expect(actual).toStrictEqual(['12', '45', '78', '']);
  });
});
