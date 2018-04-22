import {union} from '../index';

describe('union', () => {
  let args;

  beforeEach(() => {
    args = (function() {
      return arguments;
    })(1, 2, 3);
  });

  it('is a function', () => {
    expect(typeof union).toBe('function');
  });

  it('should throw when array is null or undefined', () => {
    expect(() => {
      union(undefined);
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      union(null);
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      union([], undefined);
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      union([], null);
    }).toThrowErrorMatchingSnapshot();
  });

  it('should return an empty array with n0 arguments', () => {
    expect(union()).toEqual([]);
  });

  it('should remain unchanged with only 1 argument', () => {
    expect(union([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('should return the union of the given arrays', () => {
    const actual = union([1, 3, 2], [5, 2, 1, 4], [2, 1]);
    expect(actual).toEqual([1, 3, 2, 5, 4]);
  });

  it('should not flatten nested arrays', () => {
    const actual = union([1, 3, 2], [1, [5]], [2, [4]]);
    expect(actual).toEqual([1, 3, 2, [5], [4]]);
  });

  it('should work with `arguments` objects', () => {
    const array = [0];

    expect(union(array, args)).toEqual([0, 1, 2, 3]);
  });
});
