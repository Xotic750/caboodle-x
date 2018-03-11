import 'babel-polyfill';
import {some} from '../dist/caboodle-x';

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

describe('some', () => {
  let actual;
  let expected;
  let numberOfRuns;
  let testSubject;

  beforeEach(() => {
    expected = {
      0: 2,
      2: undefinedIfNoSparseBug,
      3: true,
    };

    actual = {};
    numberOfRuns = 0;
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
  });

  it('is a function', () => {
    expect(typeof some).toBe('function');
  });

  it('should throw when callback is not a function', () => {
    expect(() => {
      some();
    }).toThrow();

    expect(() => {
      some(undefined);
    }).toThrow();

    expect(() => {
      some(null);
    }).toThrow();
  });

  it('should pass the correct values along to the callback', () => {
    const callback = jest.fn();
    const array = ['1'];
    some(array, callback);
    expect(callback).toHaveBeenCalledWith('1', 0, array);
  });

  it('should not affect elements added to the array after it has begun', () => {
    const arr = [
      1,
      2,
      3,
    ];

    let i = 0;
    some(arr, (a) => {
      i += 1;
      arr.push(a + 3);
      return i > 3;
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

  it('should set the right context when given none', () => {
    let context;
    some([1], function () {
      context = this;
    });

    expect(context).toBe(function () {
      return this;
    }.call());
  });

  it('should return false if it runs to the end', () => {
    actual = some(testSubject, () => {});
    expect(actual).toBe(false);
  });

  it('should return true if it is stopped somewhere', () => {
    actual = some(testSubject, () => true);

    expect(actual).toBe(true);
  });

  it('should return false if there are no elements', () => {
    actual = some([], () => true);

    expect(actual).toBe(false);
  });

  it('should stop after 3 elements', () => {
    some(testSubject, (obj, index) => {
      actual[index] = obj;
      numberOfRuns += 1;
      return numberOfRuns === 3;
    });

    expect(actual).toEqual(expected);
  });

  it('should stop after 3 elements using a context', () => {
    const o = {a: actual};
    some(testSubject, function (obj, index) {
      this.a[index] = obj;
      numberOfRuns += 1;
      return numberOfRuns === 3;
    }, o);

    expect(actual).toEqual(expected);
  });

  it('should stop after 3 elements in an array-like object', () => {
    const ts = createArrayLike(testSubject);
    some(ts, (obj, index) => {
      actual[index] = obj;
      numberOfRuns += 1;
      return numberOfRuns === 3;
    });

    expect(actual).toEqual(expected);
  });

  it('should stop after 3 elements in an array-like object using a context', () => {
    const ts = createArrayLike(testSubject);
    const o = {a: actual};
    some(ts, function (obj, index) {
      this.a[index] = obj;
      numberOfRuns += 1;
      return numberOfRuns === 3;
    }, o);

    expect(actual).toEqual(expected);
  });

  it('should have a boxed object as list argument of callback', () => {
    let listArg;
    some('foo', (item, index, list) => {
      listArg = list;
    });

    expect(typeof listArg).toBe('object');
    expect(Object.prototype.toString.call(listArg)).toBe('[object String]');
  });

  it('should work with arguments', () => {
    const argObj = (function () {
      return arguments;
    }('1'));

    const callback = jest.fn();
    some(argObj, callback);
    expect(callback).toHaveBeenCalledWith('1', 0, argObj);
  });

  it('should work with strings', () => {
    const callback = jest.fn();
    const string = '1';
    some(string, callback);
    expect(callback).toHaveBeenCalledWith('1', 0, string);
  });

  itHasDoc('should work wih DOM elements', () => {
    const fragment = document.createDocumentFragment();
    const div = document.createElement('div');
    fragment.appendChild(div);
    const callback = jest.fn();
    some(fragment.childNodes, callback);
    expect(callback).toHaveBeenCalledWith(div, 0, fragment.childNodes);
  });
});