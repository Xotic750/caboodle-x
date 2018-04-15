import {bind} from '../dist/caboodle-x';
import primitives from './helpers/primitives';
import objects from './helpers/objects';

describe('bind', () => {
  let actual;

  /* istanbul ignore next */
  const testSubject = {
    push(o) {
      this.a.push(o);
    },
  };

  const func = function _func() {
    Array.prototype.forEach.call(
      arguments,
      function(a) {
        this.push(a);
      },
      this,
    );

    return this;
  };

  beforeEach(() => {
    actual = [];
    testSubject.a = [];
  });

  it('binds properly without a context', () => {
    let context;
    const fn = function _fn() {
      context = this;
    };

    testSubject.func = bind(fn);
    testSubject.func();
    const fn1 = function _fn1() {
      return this;
    };

    expect(context).toBe(fn1.call());
  });

  it('binds properly without a context, and still supplies bound arguments', () => {
    let a;
    let context;
    const fn = function _fn() {
      a = Array.prototype.slice.call(arguments);
      context = this;
    };

    testSubject.func = bind(fn, undefined, 1, 2, 3);
    testSubject.func(1, 2, 3);
    expect(a).toEqual([1, 2, 3, 1, 2, 3]);
    const fn1 = function _fn1() {
      return this;
    };

    expect(context).toBe(fn1.call());
  });

  it('binds a context properly', () => {
    testSubject.func = bind(func, actual);
    testSubject.func(1, 2, 3);
    expect(actual).toEqual([1, 2, 3]);
    expect(testSubject.a).toEqual([]);
  });

  it('binds a context and supplies bound arguments', () => {
    testSubject.func = bind(func, actual, 1, 2, 3);
    testSubject.func(4, 5, 6);
    expect(actual).toEqual([1, 2, 3, 4, 5, 6]);
    expect(testSubject.a).toEqual([]);
  });

  it('returns properly without binding a context', () => {
    const fn = function _fn() {
      return this;
    };

    testSubject.func = bind(fn);
    const context = testSubject.func();
    const fn1 = function _fn1() {
      return this;
    };

    expect(context).toBe(fn1.call());
  });

  it('returns properly without binding a context, and still supplies bound arguments', () => {
    let context;
    const fn = function _fn() {
      context = this;
      return Array.prototype.slice.call(arguments);
    };

    testSubject.func = bind(fn, undefined, 1, 2, 3);
    actual = testSubject.func(1, 2, 3);
    const fn1 = function _fn1() {
      return this;
    };

    expect(context).toBe(fn1.call());
    expect(actual).toEqual([1, 2, 3, 1, 2, 3]);
  });

  it('returns properly while binding a context properly', () => {
    testSubject.func = bind(func, actual);
    const ret = testSubject.func(1, 2, 3);

    expect(ret).toBe(actual);
    expect(ret).not.toBe(testSubject);
  });

  it('returns properly while binding a context and supplies bound arguments', () => {
    testSubject.func = bind(func, actual, 1, 2, 3);
    const ret = testSubject.func(4, 5, 6);

    expect(ret).toBe(actual);
    expect(ret).not.toBe(testSubject);
  });

  it("has the new instance's context as a constructor", () => {
    let actualContext;
    const expectedContext = {foo: 'bar'};
    const fn = function _fn() {
      actualContext = this;
    };

    testSubject.Func = bind(fn, expectedContext);
    const result = new testSubject.Func();
    expect(result).toBeTruthy();
    expect(actualContext).not.toBe(expectedContext);
  });

  it('passes the correct arguments as a constructor', () => {
    const expected = {name: 'Correct'};
    const fn = function _fn(arg) {
      expect(Object.prototype.hasOwnProperty.call(this, 'name')).toBe(false);
      return arg;
    };

    testSubject.Func = bind(fn, {name: 'Incorrect'});
    const ret = new testSubject.Func(expected);
    expect(ret).toBe(expected);
  });

  it('returns the return value of the bound function when called as a constructor', () => {
    const oracle = [1, 2, 3];
    const fn = function _fn() {
      expect(this).not.toBe(oracle);
      return oracle;
    };

    const Subject = bind(fn, null);
    const result = new Subject();
    expect(result).toBe(oracle);
  });

  it('returns the correct value if constructor returns primitive', () => {
    const fn = function _fn(oracle) {
      expect(this).not.toBe(oracle);
      return oracle;
    };

    const Subject = bind(fn, null);

    primitives.forEach(primitive => {
      expect(new Subject(primitive)).not.toBe(primitive);
    });

    objects.forEach(object => {
      expect(new Subject(object)).toBe(object);
    });
  });

  it('returns the value that instance of original "class" when called as a constructor', () => {
    /* istanbul ignore next */
    const ClassA = function(x) {
      this.name = x || 'A';
    };

    const ClassB = bind(ClassA, null, 'B');

    const result = new ClassB();
    expect(result instanceof ClassA).toBe(true);
    expect(result instanceof ClassB).toBe(true);
  });

  it('sets a correct length without thisArg', () => {
    /* istanbul ignore next */
    const fn = function _fn(a, b, c) {
      return a + b + c;
    };

    const Subject = bind(fn);
    expect(Subject).toHaveLength(3);
  });

  it('sets a correct length with thisArg', () => {
    /* istanbul ignore next */
    const fn = function _fn(a, b, c) {
      return a + b + c + this.d;
    };

    const Subject = bind(fn, {d: 1});
    expect(Subject).toHaveLength(3);
  });

  it('sets a correct length with thisArg and first argument', () => {
    /* istanbul ignore next */
    const fn = function _fn(a, b, c) {
      return a + b + c + this.d;
    };

    const Subject = bind(fn, {d: 1}, 1);
    expect(Subject).toHaveLength(2);
  });

  it('sets a correct length without thisArg and first argument', () => {
    /* istanbul ignore next */
    const fn = function _fn(a, b, c) {
      return a + b + c;
    };

    const Subject = bind(fn, undefined, 1);
    expect(Subject).toHaveLength(2);
  });

  it('sets a correct length without thisArg and too many argument', () => {
    /* istanbul ignore next */
    const fn = function _fn(a, b, c) {
      return a + b + c;
    };

    const Subject = bind(fn, undefined, 1, 2, 3, 4);
    expect(Subject).toHaveLength(0);
  });
});
