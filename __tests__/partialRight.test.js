import {partialRight} from '../index';
import primitives from './helpers/primitives';
import objects from './helpers/objects';

describe('partialRight', () => {
  let actual;

  const testSubject = {
    push(o) {
      this.a.push(o);
    },
  };

  beforeEach(() => {
    actual = [];
    testSubject.a = [];
  });

  it('binds properly without arguments', () => {
    let context;
    const fn = function _fn() {
      context = this;
    };

    expect(fn).toHaveLength(0);
    testSubject.func = partialRight(fn);
    expect(testSubject.func).toHaveLength(0);
    testSubject.func();

    expect(context).toBe(testSubject);
  });

  it('binds properly and supplies bound arguments', () => {
    let a;
    let context;
    const fn = function _fn(s, t, u, v) {
      a = Array.prototype.slice.call(arguments);
      context = this;
    };

    expect(fn).toHaveLength(4);
    testSubject.func = partialRight(fn, 4, 5, 6);
    expect(testSubject.func).toHaveLength(4);
    testSubject.func(1, 2, 3);
    expect(a).toEqual([1, 2, 3, 4, 5, 6]);

    expect(context).toBe(testSubject);
  });

  it('returns properly without arguments', () => {
    let context;
    const fn = function _fn(a, b, c) {
      context = this;
      return Array.prototype.slice.call(arguments);
    };

    expect(fn).toHaveLength(3);
    testSubject.func = partialRight(fn);
    expect(testSubject.func).toHaveLength(3);
    actual = testSubject.func();

    expect(context).toBe(testSubject);
    expect(actual).toEqual([]);
  });

  it('returns properly and supplies bound arguments', () => {
    let context;
    const fn = function _fn() {
      context = this;
      return Array.prototype.slice.call(arguments);
    };

    testSubject.func = partialRight(fn, 4, 5, 6);
    actual = testSubject.func(1, 2, 3);

    expect(context).toBe(testSubject);
    expect(actual).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("has the new instance's context as a constructor", () => {
    let actualContext;
    const expectedArgs = {foo: 'bar'};
    const fn = function _fn() {
      actualContext = this;
    };

    testSubject.Func = partialRight(fn, expectedArgs);
    const result = new testSubject.Func();
    expect(result).toBeTruthy();
    expect(actualContext).not.toBe(expectedArgs);
  });

  it('passes the correct arguments as a constructor', () => {
    const expected = {name: 'Correct'};
    const fn = function _fn(arg, a, b, c) {
      expect(Object.prototype.hasOwnProperty.call(this, 'name')).toBe(false);
      return arg;
    };

    expect(fn).toHaveLength(4);
    testSubject.Func = partialRight(fn);
    expect(testSubject.Func).toHaveLength(4);
    const ret = new testSubject.Func(expected);
    expect(ret).toBe(expected);
  });

  it('returns the return value of the bound function when called as a constructor', () => {
    const oracle = [1, 2, 3];
    const fn = function _fn() {
      expect(this).not.toBe(oracle);
      return oracle;
    };

    const Subject = partialRight(fn);
    const result = new Subject();
    expect(result).toBe(oracle);
  });

  it('returns the correct value if constructor returns primitive', () => {
    const fn = function _fn(oracle) {
      expect(this).not.toBe(oracle);
      return oracle;
    };

    const Subject = partialRight(fn);

    primitives.forEach(primitive => {
      expect(new Subject(primitive)).not.toBe(primitive);
    });

    objects.forEach(object => {
      expect(new Subject(object)).toBe(object);
    });
  });

  it('returns the value that instance of original "class" when called as a constructor', () => {
    const ClassA = function(x) {
      this.name = x || 'A';
    };

    const ClassB = partialRight(ClassA, 'B');

    const result = new ClassB();
    expect(result instanceof ClassA).toBe(true);
    expect(result instanceof ClassB).toBe(true);
  });
});
