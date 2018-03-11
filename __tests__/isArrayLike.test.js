import {isArrayLike} from '../dist/caboodle-x';

const falsey = Object.freeze([false, 0, NaN, '']);

describe('isArrayLike', () => {
  it('should be a function', () => {
    expect(isArrayLike).toBeInstanceOf(Function);
  });

  it('should return `false` with no args', () => {
    expect(isArrayLike()).toBe(false);
  });

  it('should return `true` for array-like values', () => {
    (function () {
      const values = [
        arguments,
        [1, 2, 3],
        {0: 1, length: 1},
        'a',
      ];
      const expected = values.map(() => true);
      const actual = values.map(isArrayLike);
      expect(actual).toEqual(expected);
    }(1, 2, 3));
  });

  it('should return `false` for non-arrays', () => {
    const expected = falsey.map(value => value === '');
    const actual = falsey.map(isArrayLike);

    expect(actual).toEqual(expected);
    expect(isArrayLike(true)).toBe(false);
    expect(isArrayLike(new Date())).toBe(false);
    expect(isArrayLike(new Error())).toBe(false);
    expect(isArrayLike({})).toBe(false);
    expect(isArrayLike(Array.prototype.slice)).toBe(false);
    expect(isArrayLike({a: 1})).toBe(false);
    expect(isArrayLike(1)).toBe(false);
    expect(isArrayLike(/x/)).toBe(false);

    try {
      // eslint-disable-next-line no-new-func
      const fat = new Function('return () => {return this;}');
      expect(isArrayLike(fat)).toBe(false);
    } catch (ignore) {}

    try {
      // eslint-disable-next-line no-new-func
      const gen = new Function('return function* idMaker(){}');
      expect(isArrayLike(gen)).toBe(false);
    } catch (ignore) {}

    try {
      // eslint-disable-next-line no-new-func
      const classes = new Function('"use strict"; return class MyClass {}');
      expect(isArrayLike(classes)).toBe(false);
    } catch (ignore) {}
  });
});
