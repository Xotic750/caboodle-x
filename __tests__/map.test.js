import {map} from '../dist/caboodle-x';

const itHasDoc = typeof document !== 'undefined' && document ? it : xit;

// IE 6 - 8 have a bug where this returns false.
const canDistinguish = 0 in [undefined];
const undefinedIfNoSparseBug = canDistinguish ? undefined : {
  valueOf() {
    return 0;
  },
};

const createArrayLike = function (arr) {
  const o = {};
  arr.forEach((e, i) => {
    o[i] = e;
  });

  o.length = arr.length;
  return o;
};

describe('map', () => {
  let testSubject;
  let testObject;
  let callBack;

  beforeEach(() => {
    testSubject = [
      2,
      3,
      undefinedIfNoSparseBug,
      true,
      'hej',
      null,
      false,
      0,
    ];

    delete testSubject[1];

    let i = -1;
    callBack = function () {
      i += 1;
      return i;
    };
  });

  it('is a function', () => {
    expect(typeof map).toBe('function');
  });

  it('should throw when callback is not a function', () => {
    expect(() => {
      map();
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      map(undefined);
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      map(null);
    }).toThrowErrorMatchingSnapshot();
  });

  it('should return an empty array when given an empty array', () => {
    expect(map([], () => true)).toEqual([]);
  });

  describe('Array object', () => {
    it('should call mapper with the right parameters', () => {
      const mapper = jest.fn();
      const array = [1];
      map(array, mapper);
      expect(mapper).toHaveBeenCalledWith(1, 0, array);
    });

    it('should set the context correctly', () => {
      const context = [];
      map(testSubject, function (o, i) {
        this[i] = o;
      }, context);

      expect(context).toEqual(testSubject);
    });

    it('should set the right context when given none', () => {
      let context;
      map([1], function () {
        context = this;
      });

      expect(context).toBe(function () {
        return this;
      }.call());
    });

    it('should not change the array it is called on', () => {
      const copy = testSubject.slice();
      map(testSubject, callBack);
      expect(testSubject).toEqual(copy);
    });

    it('should only run for the number of objects in the array when it started', () => {
      const arr = [
        1,
        2,
        3,
      ];

      let i = 0;
      map(arr, (o) => {
        arr.push(o + 3);
        i += 1;
        return o;
      });

      expect(arr).toEqual([
        1,
        2,
        3,
        4,
        5,
        6,
      ]);

      expect(i).toBe(3);
    });

    it('should properly translate the values as according to the callBack', () => {
      const result = map(testSubject, callBack);
      const expected = [
        0,
        0,
        1,
        2,
        3,
        4,
        5,
        6,
      ];

      delete expected[1];
      expect(result).toEqual(expected);
    });

    it('should skip non-existing values', () => {
      const array = [
        1,
        2,
        3,
        4,
      ];

      let i = 0;
      delete array[2];
      map(array, () => {
        i += 1;
      });

      expect(i).toBe(3);
    });
  });

  describe('Array-like', () => {
    beforeEach(() => {
      testObject = createArrayLike(testSubject);
    });

    it('should call mapper with the right parameters', () => {
      const mapper = jest.fn();
      const array = createArrayLike([1]);
      map(array, mapper);
      expect(mapper).toHaveBeenCalledWith(1, 0, array);
    });

    it('should set the context correctly', () => {
      const context = {};
      map(testObject, function (o, i) {
        this[i] = o;
        this.length = i + 1;
      }, context);

      expect(context).toEqual(testObject);
    });

    it('should set the right context when given none', () => {
      let context;
      map(createArrayLike([1]), function () {
        context = this;
      });

      expect(context).toBe(function () {
        return this;
      }.call());
    });

    it('should not change the array it is called on', () => {
      const copy = createArrayLike(testSubject);
      map(testObject, callBack);
      expect(testObject).toEqual(copy);
    });

    it('should only run for the number of objects in the array when it started', () => {
      const arr = createArrayLike([
        1,
        2,
        3,
      ]);

      let i = 0;
      map(arr, (o) => {
        Array.prototype.push.call(arr, o + 3);
        i += 1;
        return o;
      });

      expect(Array.prototype.slice.call(arr)).toEqual([
        1,
        2,
        3,
        4,
        5,
        6,
      ]);

      expect(i).toBe(3);
    });

    it('should properly translate the values as according to the callBack', () => {
      const result = map(testObject, callBack);
      const expected = [
        0,
        0,
        1,
        2,
        3,
        4,
        5,
        6,
      ];

      delete expected[1];
      expect(result).toEqual(expected);
    });

    it('should skip non-existing values', () => {
      const array = createArrayLike([
        1,
        2,
        3,
        4,
      ]);

      let i = 0;
      delete array[2];
      map(array, () => {
        i += 1;
      });

      expect(i).toBe(3);
    });
  });

  it('should have a boxed object as list argument of callBack', () => {
    let actual;
    map('foo', (item, index, list) => {
      actual = list;
    });

    expect(typeof actual).toBe('object');
    expect(Object.prototype.toString.call(actual)).toBe('[object String]');
  });

  it('should work with arguments', () => {
    const argObj = (function () {
      return arguments;
    }('1'));

    const callback = jest.fn();
    map(argObj, callback);
    expect(callback).toHaveBeenCalledWith('1', 0, argObj);
  });

  it('should work with strings', () => {
    const callback = jest.fn();
    const string = '1';
    map(string, callback);
    expect(callback).toHaveBeenCalledWith('1', 0, string);
  });

  itHasDoc('should work wih DOM elements', () => {
    const fragment = document.createDocumentFragment();
    const div = document.createElement('div');
    fragment.appendChild(div);
    const callback = jest.fn();
    map(fragment.childNodes, callback);
    expect(callback).toHaveBeenCalledWith(div, 0, fragment.childNodes);
  });
});
