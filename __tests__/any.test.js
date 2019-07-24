import {any} from 'src/caboodle-x';

const itHasDoc = typeof document !== 'undefined' && document ? it : xit;

const createArrayLike = function(arr) {
  const o = {};
  arr.forEach((e, i) => {
    o[i] = e;
  });

  o.length = arr.length;

  return o;
};

const stubTrue = () => true;

const noop = () => {};

describe('any', () => {
  let actual;
  let expected;
  let numberOfRuns;
  let testSubject;

  beforeEach(() => {
    expected = {
      0: 2,
      1: undefined,
      2: undefined,
      3: true,
    };

    actual = {};
    numberOfRuns = 0;
    testSubject = [2, 3, undefined, true, 'hej', null, false, 0];

    delete testSubject[1];
  });

  it('is a function', () => {
    expect(typeof any).toBe('function');
  });

  it('should throw when array is null or undefined', () => {
    expect(() => {
      any();
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      any(undefined);
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      any(null);
    }).toThrowErrorMatchingSnapshot();
  });

  it('should pass the correct values along to the callback', () => {
    const callback = jest.fn();
    const array = ['1'];
    any(array, callback);
    expect(callback).toHaveBeenCalledWith('1', 0, array);
  });

  it('should not affect elements added to the array after it has begun', () => {
    const arr = [1, 2, 3];

    let i = 0;
    any(arr, (a) => {
      i += 1;
      arr.push(a + 3);

      return i > 3;
    });

    expect(arr).toStrictEqual([1, 2, 3, 4, 5, 6]);

    expect(i).toBe(3);
  });

  it('should set the right context when given none', () => {
    let context;
    any([1], function() {
      /* eslint-disable-next-line babel/no-invalid-this */
      context = this;
    });

    expect(context).toBe(
      function() {
        /* eslint-disable-next-line babel/no-invalid-this */
        return this;
      }.call(),
    );
  });

  it('should return false if it runs to the end', () => {
    actual = any(testSubject, noop);
    expect(actual).toBe(false);
  });

  it('should return true if it is stopped anywhere', () => {
    actual = any(testSubject, stubTrue);

    expect(actual).toBe(true);
  });

  it('should return false if there are no elements', () => {
    actual = any([], stubTrue);

    expect(actual).toBe(false);
  });

  it('should stop after 4 elements', () => {
    any(testSubject, (obj, index) => {
      actual[index] = obj;
      numberOfRuns += 1;

      return numberOfRuns === 4;
    });

    expect(actual).toStrictEqual(expected);
  });

  it('should stop after 4 elements using a context', () => {
    const o = {a: actual};
    any(
      testSubject,
      function(obj, index) {
        this.a[index] = obj;
        numberOfRuns += 1;

        return numberOfRuns === 4;
      }.bind(o),
    );

    expect(actual).toStrictEqual(expected);
  });

  it('should stop after 4 elements in an array-like object', () => {
    const ts = createArrayLike(testSubject);
    any(ts, (obj, index) => {
      actual[index] = obj;
      numberOfRuns += 1;

      return numberOfRuns === 4;
    });

    expect(actual).toStrictEqual(expected);
  });

  it('should stop after 4 elements in an array-like object using a context', () => {
    const ts = createArrayLike(testSubject);
    const o = {a: actual};
    any(
      ts,
      function(obj, index) {
        this.a[index] = obj;
        numberOfRuns += 1;

        return numberOfRuns === 4;
      }.bind(o),
    );

    expect(actual).toStrictEqual(expected);
  });

  it('should have a boxed object as list argument of callback', () => {
    let listArg;
    any('foo', (item, index, list) => {
      listArg = list;
    });

    expect(typeof listArg).toBe('object');
    expect(Object.prototype.toString.call(listArg)).toBe('[object String]');
  });

  it('should work with arguments', () => {
    const argObj = (function() {
      return arguments;
    })('1');

    const callback = jest.fn();
    any(argObj, callback);
    expect(callback).toHaveBeenCalledWith('1', 0, argObj);
  });

  it('should work with strings', () => {
    const callback = jest.fn();
    const string = '1';
    any(string, callback);
    expect(callback).toHaveBeenCalledWith('1', 0, string);
  });

  itHasDoc('should work wih DOM elements', () => {
    const fragment = document.createDocumentFragment();
    const div = document.createElement('div');
    fragment.appendChild(div);
    const callback = jest.fn();
    any(fragment.childNodes, callback);
    expect(callback).toHaveBeenCalledWith(div, 0, fragment.childNodes);
  });
});
