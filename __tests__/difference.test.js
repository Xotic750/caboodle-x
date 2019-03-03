import {difference} from '../index';

describe('difference', () => {
  let LARGE_ARRAY_SIZE;

  beforeEach(() => {
    LARGE_ARRAY_SIZE = 200;
  });

  it('is a function', () => {
    expect(typeof difference).toBe('function');
  });

  it('should throw when array is null or undefined', () => {
    expect(() => {
      difference();
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      difference(undefined);
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      difference(null);
    }).toThrowErrorMatchingSnapshot();
  });

  it('should throw when exclude is null or undefined', () => {
    expect(() => {
      difference([], undefined);
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      difference([], null);
    }).toThrowErrorMatchingSnapshot();
  });

  it('should remain unchanged with only 1 argument', () => {
    expect(difference([1, 2, 3])).toStrictEqual([1, 2, 3]);
  });

  it('should return the difference of the given arrays', () => {
    let actual = difference([1, 2, 3, 4, 5], [5, 2, 10]);

    expect(actual).toStrictEqual([1, 3, 4]);

    actual = difference([1, 2, 3, 4, 5], [5, 2, 10], [8, 4]);

    expect(actual).toStrictEqual([1, 3]);
  });

  it('should match `NaN`', () => {
    expect(difference([1, NaN, 3], [NaN, 5, NaN])).toStrictEqual([1, 3]);
  });

  it('should work with large arrays', () => {
    const array1 = new Array(LARGE_ARRAY_SIZE + 1).fill().map(Number.call, Number);
    const array2 = new Array(LARGE_ARRAY_SIZE).fill().map(Number.call, Number);
    const a = {};
    const b = {};
    const c = {};

    array1.push(a, b, c);
    array2.push(b, c, a);

    expect(difference(array1, array2)).toStrictEqual([LARGE_ARRAY_SIZE]);
  });

  it('should work with large arrays of objects', () => {
    const object1 = {};
    const object2 = {};
    const largeArray = new Array(LARGE_ARRAY_SIZE).fill(object1);

    expect(difference([object1, object2], largeArray)).toStrictEqual([object2]);
  });

  it('should work with large arrays of `NaN`', () => {
    const largeArray = new Array(LARGE_ARRAY_SIZE).fill(NaN);
    expect(difference([1, NaN, 3], largeArray)).toStrictEqual([1, 3]);
  });

  it('should work with `arguments` objects', () => {
    const args = (function() {
      return arguments;
    })(1, 2, 3);

    const array = [0, 1, null, 3];

    expect(difference(array, args)).toStrictEqual([0, null]);
  });
});
