import {findIndex} from '../index';

const itHasDoc = typeof document !== 'undefined' && document ? it : xit;

describe('findIndex', () => {
  let list;
  beforeEach(() => {
    list = [5, 10, 15, 20];
  });

  it('should throw when target is null or undefined', () => {
    expect(() => {
      findIndex();
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      findIndex(undefined);
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      findIndex(null);
    }).toThrowErrorMatchingSnapshot();
  });

  it('should have a length of 2', () => {
    expect(findIndex).toHaveLength(2);
  });

  it('should find item key by predicate', () => {
    const result = findIndex(list, (item) => item === 15);
    expect(result).toBe(2);
  });

  it('should return -1 when nothing matched', () => {
    const result = findIndex(list, (item) => item === 'a');
    expect(result).toBe(-1);
  });

  it('should throw TypeError when function was not passed', () => {
    expect(() => {
      list.findIndex();
    }).toThrowErrorMatchingSnapshot();
  });

  it('should receive all three parameters', () => {
    const index = findIndex(list, (value, idx, arr) => {
      expect(list[idx]).toBe(value);
      expect(list).toEqual(arr);
      return false;
    });
    expect(index).toBe(-1);
  });

  it('should work with a context', () => {
    const context = {};
    findIndex(
      [1],
      function() {
        expect(this).toBe(context);
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

    const foundIndex = findIndex(obj, (item) => item === 2);

    expect(foundIndex).toBe(1);
  });

  it('should work with an array-like object with negative length', () => {
    const obj = {
      0: 1,
      1: 2,
      2: 3,
      length: -3,
    };

    const foundIndex = findIndex(obj, (item) => {
      throw new Error(`should not reach here ${item}`);
    });

    expect(foundIndex).toBe(-1);
  });

  it('should work with a sparse array', () => {
    const obj = [1, , undefined];
    expect(1 in obj).toBe(false);
    const seen = [];
    const foundIndex = findIndex(obj, (item, idx) => {
      seen.push([idx, item]);
      return typeof item === 'undefined' && idx === 2;
    });
    expect(foundIndex).toBe(2);
    expect(seen).toEqual([[0, 1], [1, undefined], [2, undefined]]);
  });

  it('should work with a sparse array-like object', () => {
    const obj = {
      0: 1,
      2: undefined,
      length: 3.2,
    };

    const seen = [];
    const foundIndex = findIndex(obj, (item, idx) => {
      seen.push([idx, item]);
      return false;
    });

    expect(foundIndex).toBe(-1);
    expect(seen).toEqual([[0, 1], [1, undefined], [2, undefined]]);
  });

  it('should work with strings', () => {
    const seen = [];
    const foundIndex = findIndex('abc', (item, idx) => {
      seen.push([idx, item]);
      return false;
    });

    expect(foundIndex).toBe(-1);
    expect(seen).toEqual([[0, 'a'], [1, 'b'], [2, 'c']]);
  });

  it('should work with arguments', () => {
    const obj = (function() {
      return arguments;
    })('a', 'b', 'c');

    const seen = [];
    const foundIndex = findIndex(obj, (item, idx) => {
      seen.push([idx, item]);
      return false;
    });

    expect(foundIndex).toBe(-1);
    expect(seen).toEqual([[0, 'a'], [1, 'b'], [2, 'c']]);
  });

  itHasDoc('should work wih DOM elements', () => {
    const fragment = document.createDocumentFragment();
    const div = document.createElement('div');
    fragment.appendChild(div);
    const callback = jest.fn();
    findIndex(fragment.childNodes, callback);
    expect(callback).toHaveBeenCalledWith(div, 0, fragment.childNodes);
  });
});
