import {find} from '../index';

const list = [5, 10, 15, 20];

describe('find()', () => {
  it('should find item by predicate', () => {
    const result = find(list, (item) => item === 15);
    expect(result).toBe(15);
  });

  it('should return undefined when nothing matched', () => {
    const result = find(list, (item) => item === 'a');
    expect(result).toBe(undefined);
  });

  it('should throw TypeError when function was not passed', () => {
    expect(() => {
      find(list);
    }).toThrowErrorMatchingSnapshot();
  });

  it('should receive all three parameters', () => {
    const foundIndex = find(list, (value, index, arr) => {
      expect(list).toHaveProperty(String(index), value);
      expect(list).toEqual(arr);
      return false;
    });
    expect(foundIndex).toBe(undefined);
  });

  it('should work with a context', () => {
    const context = {};
    find(
      list,
      function() {
        return expect(this).toBe(context);
      }.bind(context),
    );
  });

  it('should work with an array-like object', () => {
    const obj = {
      0: 1,
      1: 2,
      2: 3,
      length: 3,
    };
    const found = find(obj, (item) => item === 2);
    expect(found).toBe(2);
  });

  it('should work with an array-like object with negative length', () => {
    const obj = {
      0: 1,
      1: 2,
      2: 3,
      length: -3,
    };

    const found = find(obj, () => {
      throw new Error('should not reach here');
    });

    expect(found).toBe(undefined);
  });

  it('should work with a sparse array', () => {
    const obj = [1, , undefined];
    expect(1 in obj).toBe(false);
    const seen = [];
    const found = find(obj, (item, idx) => {
      seen.push([idx, item]);
      return false;
    });
    expect(found).toBe(undefined);
    expect(seen).toEqual([[0, 1], [1, undefined], [2, undefined]]);
  });

  it('should work with a sparse array-like object', () => {
    const obj = {0: 1, 2: undefined, length: 3.2};
    const seen = [];
    const found = find(obj, (item, idx) => {
      seen.push([idx, item]);
      return false;
    });
    expect(found).toBe(undefined);
    expect(seen).toEqual([[0, 1], [1, undefined], [2, undefined]]);
  });
});
