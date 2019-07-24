import {partial} from 'src/caboodle-x';

import primitives from './helpers/primitives';
import objects from './helpers/objects';

describe('partial', () => {
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
      /* eslint-disable-next-line babel/no-invalid-this */
      context = this;
    };

    testSubject.func = partial(fn);
    testSubject.func();

    expect(context).toBe(testSubject);
  });

  it('binds properly and supplies bound arguments', () => {
    let a;
    let context;
    const fn = function _fn() {
      a = Array.prototype.slice.call(arguments);
      /* eslint-disable-next-line babel/no-invalid-this */
      context = this;
    };

    expect(fn).toHaveLength(0);
    testSubject.func = partial(fn, 1, 2, 3);
    expect(testSubject.func).toHaveLength(0);
    testSubject.func(4, 5, 6);
    expect(a).toStrictEqual([1, 2, 3, 4, 5, 6]);

    expect(context).toBe(testSubject);
  });

  it('returns properly without arguments', () => {
    let context;
    const fn = function _fn() {
      /* eslint-disable-next-line babel/no-invalid-this */
      context = this;

      return Array.prototype.slice.call(arguments);
    };

    testSubject.func = partial(fn);
    actual = testSubject.func();

    expect(context).toBe(testSubject);
    expect(actual).toStrictEqual([]);
  });

  it('returns properly and supplies bound arguments', () => {
    let context;

    const fn = function _fn() {
      /* eslint-disable-next-line babel/no-invalid-this */
      context = this;

      return Array.prototype.slice.call(arguments);
    };

    expect(fn).toHaveLength(4);
    testSubject.func = partial(fn, 1, 2, 3);
    expect(testSubject.func).toHaveLength(1);
    actual = testSubject.func(4, 5, 6);

    expect(context).toBe(testSubject);
    expect(actual).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });

  it("has the new instance's context as a constructor", () => {
    let actualContext;
    const expectedArgs = {foo: 'bar'};
    const fn = function _fn() {
      /* eslint-disable-next-line babel/no-invalid-this */
      actualContext = this;
    };

    testSubject.Func = partial(fn, expectedArgs);
    const result = new testSubject.Func();
    expect(result).toBeTruthy();
    expect(actualContext).not.toBe(expectedArgs);
  });

  it('passes the correct arguments as a constructor', () => {
    const expected = {name: 'Correct'};

    const fn = function _fn(arg) {
      /* eslint-disable-next-line babel/no-invalid-this */
      expect(Object.prototype.hasOwnProperty.call(this, 'name')).toBe(false);

      return arg;
    };

    expect(fn).toHaveLength(3);
    testSubject.Func = partial(fn);
    expect(testSubject.Func).toHaveLength(3);
    const ret = new testSubject.Func(expected);
    expect(ret).toBe(expected);
  });

  it('returns the return value of the bound function when called as a constructor', () => {
    const oracle = [1, 2, 3];
    const fn = function _fn() {
      /* eslint-disable-next-line babel/no-invalid-this */
      expect(this).not.toBe(oracle);

      return oracle;
    };

    const Subject = partial(fn);
    const result = new Subject();
    expect(result).toBe(oracle);
  });

  it('returns the correct value if constructor returns primitive', () => {
    const fn = function _fn(oracle) {
      /* eslint-disable-next-line babel/no-invalid-this */
      expect(this).not.toBe(oracle);

      return oracle;
    };

    const Subject = partial(fn);

    primitives.forEach((primitive) => {
      expect(new Subject(primitive)).not.toBe(primitive);
    });

    objects.forEach((object) => {
      expect(new Subject(object)).toBe(object);
    });
  });

  it('returns the value that instance of original "class" when called as a constructor', () => {
    const ClassA = function(x) {
      this.name = x || 'A';
    };

    const ClassB = partial(ClassA, 'B');

    const result = new ClassB();
    expect(result instanceof ClassA).toBe(true);
    expect(result instanceof ClassB).toBe(true);
  });
});
