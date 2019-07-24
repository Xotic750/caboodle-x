import {isArrayLikeObject} from 'src/caboodle-x';

const falsey = Object.freeze([false, 0, NaN, '']);

describe('isArrayLikeObject', () => {
  it('should be a function', () => {
    expect(isArrayLikeObject).toBeInstanceOf(Function);
  });

  it('should return `true` for array-like values', () => {
    (function() {
      const values = [arguments, [1, 2, 3], {0: 1, length: 1}];
      const expected = values.map(() => true);
      const actual = values.map(isArrayLikeObject);
      expect(actual).toStrictEqual(expected);
    })(1, 2, 3);
  });

  it('should return `false` for non-arrays', () => {
    const expected = falsey.map(() => false);
    const actual = falsey.map(isArrayLikeObject);

    expect(actual).toStrictEqual(expected);
    expect(isArrayLikeObject(true)).toBe(false);
    expect(isArrayLikeObject(new Date())).toBe(false);
    expect(isArrayLikeObject(new Error())).toBe(false);
    expect(isArrayLikeObject({})).toBe(false);
    expect(isArrayLikeObject(Array.prototype.slice)).toBe(false);
    expect(isArrayLikeObject({a: 1})).toBe(false);
    expect(isArrayLikeObject(1)).toBe(false);
    expect(isArrayLikeObject(/x/)).toBe(false);

    try {
      const fat = new Function('return () => {return this;}');
      expect(isArrayLikeObject(fat)).toBe(false);
    } catch (ignore) {
      // empty
    }

    try {
      const gen = new Function('return function* idMaker(){}');
      expect(isArrayLikeObject(gen)).toBe(false);
    } catch (ignore) {
      // empty
    }

    try {
      const classes = new Function('"use strict"; return class MyClass {}');
      expect(isArrayLikeObject(classes)).toBe(false);
    } catch (ignore) {
      // empty
    }
  });
});
