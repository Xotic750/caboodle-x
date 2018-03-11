import 'babel-polyfill';
import {forEach} from '../dist/caboodle-x';

const itHasDoc = typeof document !== 'undefined' && document ? it : xit;

const isStrict = (function () {
  return Boolean(this) === false;
}());

const itStrict = isStrict ? it : xit;

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

describe('forEach', () => {
  let actual;
  let expected;
  let testSubject;

  beforeEach(() => {
    expected = {
      0: 2,
      2: undefinedIfNoSparseBug,
      3: true,
      4: 'hej',
      5: null,
      6: false,
      7: 0,
    };

    actual = {};
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
    expect(typeof forEach).toBe('function');
  });

  it('should throw when callback is not a function', () => {
    expect(() => {
      forEach();
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      forEach(undefined);
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      forEach(null);
    }).toThrowErrorMatchingSnapshot();
  });

  it('should pass the right parameters', () => {
    const callback = jest.fn();
    const array = ['1'];
    forEach(array, callback);
    expect(callback).toHaveBeenCalledWith('1', 0, array);
  });

  it('should not affect elements added to the array after it has begun', () => {
    const arr = [
      1,
      2,
      3,
    ];
    let i = 0;
    forEach(arr, (a) => {
      i += 1;
      arr.push(a + 3);
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
    forEach([1], function () {
      context = this;
    });

    expect(context).toBe(function () {
      return this;
    }.call());
  });

  it('should iterate all', () => {
    forEach(testSubject, (obj, index) => {
      actual[index] = obj;
    });

    expect(actual).toEqual(expected);
  });

  it('should iterate all using a context', () => {
    const o = {a: actual};

    forEach(testSubject, function (obj, index) {
      this.a[index] = obj;
    }, o);

    expect(actual).toEqual(expected);
  });

  it('should iterate all in an array-like object', () => {
    const ts = createArrayLike(testSubject);
    forEach(ts, (obj, index) => {
      actual[index] = obj;
    });

    expect(actual).toEqual(expected);
  });

  it('should iterate all in an array-like object using a context', () => {
    const ts = createArrayLike(testSubject);
    const o = {a: actual};

    forEach(ts, function (obj, index) {
      this.a[index] = obj;
    }, o);

    expect(actual).toEqual(expected);
  });

  describe('strings', () => {
    const str = 'Hello, World!';

    it('should iterate all in a string', () => {
      actual = [];
      forEach(str, (item, index) => {
        actual[index] = item;
      });

      expect(actual).toEqual(str.split(''));
    });

    it('should iterate all in a string using a context', () => {
      actual = [];
      const o = {a: actual};
      forEach(str, function (item, index) {
        this.a[index] = item;
      }, o);

      expect(actual).toEqual(str.split(''));
    });
  });

  it('should have a boxed object as list argument of callback', () => {
    let listArg;
    forEach('foo', (item, index, list) => {
      listArg = list;
    });

    expect(typeof listArg).toBe('object');
    expect(Object.prototype.toString.call(listArg)).toBe('[object String]');
  });

  itStrict('does not autobox the content in strict mode', () => {
    let context;
    forEach([1], function () {
      context = this;
    }, 'x');

    expect(typeof context).toBe('string');
  });

  it('should work with arguments', () => {
    const argObj = (function () {
      return arguments;
    }('1'));

    const callback = jest.fn();
    forEach(argObj, callback);
    expect(callback).toHaveBeenCalledWith('1', 0, argObj);
  });

  it('should work with strings', () => {
    const callback = jest.fn();
    const string = '1';
    forEach(string, callback);
    expect(callback).toHaveBeenCalledWith('1', 0, string);
  });

  itHasDoc('should work wih DOM elements', () => {
    const fragment = document.createDocumentFragment();
    const div = document.createElement('div');
    fragment.appendChild(div);
    const callback = jest.fn();
    forEach(fragment.childNodes, callback);
    expect(callback).toHaveBeenCalledWith(div, 0, fragment.childNodes);
  });
});
