import {arity} from '../dist/caboodle-x';
import primitives from './helpers/primitives';
import objects from './helpers/objects';

const noop = function () {};

describe('arity', () => {
  // let actual;

  /* istanbul ignore next */
  const testSubject = {
    push(o) {
      this.a.push(o);
    },
  };

  beforeEach(() => {
    // actual = [];
    testSubject.a = [];
  });

  it('is a function', () => {
    expect(typeof arity).toBe('function');
  });

  it('should throw when target is null or undefined', () => {
    expect(() => {
      arity();
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      arity(undefined);
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      arity(null);
    }).toThrowErrorMatchingSnapshot();
  });

  it('should throw when target is not a function', () => {
    primitives.forEach((primitive) => {
      expect(() => {
        arity(primitive);
      }).toThrowErrorMatchingSnapshot();
    });
  });

  it('binds properly without arguments and not called with arguments', () => {
    let context;
    let args;
    const fn = function _fn(a, b, c) {
      context = this;
      args = Array.prototype.slice.call(arguments);
      noop(a, b, c);
    };

    testSubject.func = arity(fn);
    expect(typeof testSubject.func).toBe('function');
    testSubject.func();

    expect(context).toBe(testSubject);
    expect(args).toEqual([]);
  });

  it('binds properly without arguments', () => {
    let context;
    let args;
    const fn = function _fn(a, b, c) {
      context = this;
      args = Array.prototype.slice.call(arguments);
      noop(a, b, c);
    };

    testSubject.func = arity(fn);
    expect(typeof testSubject.func).toBe('function');
    testSubject.func(1, 2, 3, 4);

    expect(context).toBe(testSubject);
    expect(args).toEqual([1, 2, 3]);
  });

  it('binds properly with arguments', () => {
    const arityLength = 1;
    let context;
    let args;
    const fn = function _fn(a, b, c) {
      context = this;
      args = Array.prototype.slice.call(arguments);
      noop(a, b, c);
    };

    testSubject.func = arity(fn, arityLength);
    expect(typeof testSubject.func).toBe('function');
    testSubject.func(1, 2, 3, 4);

    expect(context).toBe(testSubject);
    expect(args).toEqual([1]);
  });

  it("has the new instance's context as a constructor", () => {
    let context;
    let args;
    const fn = function _fn(a, b, c) {
      context = this;
      args = Array.prototype.slice.call(arguments);
      noop(a, b, c);
    };

    testSubject.Func = arity(fn);
    const result = new testSubject.Func();
    expect(result).toBeTruthy();
    expect(context instanceof fn).toBe(true);
    expect(result instanceof fn).toBe(true);
    expect(args).toEqual([]);
  });

  it("has the new instance's context as a constructor with arity set", () => {
    let context;
    let args;
    const fn = function _fn(a, b, c) {
      context = this;
      args = Array.prototype.slice.call(arguments);
      noop(a, b, c);
    };

    testSubject.Func = arity(fn, 2);
    const result = new testSubject.Func(1, 2, 3);
    expect(result).toBeTruthy();
    expect(context instanceof fn).toBe(true);
    expect(result instanceof fn).toBe(true);
    expect(args).toEqual([1, 2]);
  });

  it('passes the correct arguments as a constructor', () => {
    const expected = {name: 'Correct'};
    const fn = function _fn(arg) {
      expect(Object.prototype.hasOwnProperty.call(this, 'name')).toBe(false);
      return arg;
    };

    testSubject.Func = arity(fn);
    const ret = new testSubject.Func(expected);
    expect(ret).toBe(expected);
  });

  it('returns the return value of the bound function when called as a constructor', () => {
    const oracle = [1, 2, 3];
    const fn = function _fn() {
      expect(this).not.toBe(oracle);
      return oracle;
    };

    const Subject = arity(fn);
    const result = new Subject();
    expect(result).toBe(oracle);
  });

  it('returns the correct value if constructor returns primitive', () => {
    const fn = function _fn(oracle) {
      expect(this).not.toBe(oracle);
      return oracle;
    };

    const Subject = arity(fn);

    primitives.forEach((primitive) => {
      expect(new Subject(primitive)).not.toBe(primitive);
    });

    objects.forEach((object) => {
      expect(new Subject(object)).toBe(object);
    });
  });

  it('returns the value that instance of original "class" when called as a constructor', () => {
    /* istanbul ignore next */
    const ClassA = function (x) {
      this.name = x || 'A';
    };

    const ClassB = arity(ClassA, 'B');

    const result = new ClassB();
    expect(result instanceof ClassA).toBe(true);
    expect(result instanceof ClassB).toBe(true);
  });
});
