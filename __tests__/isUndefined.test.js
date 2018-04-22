import {isUndefined} from '../index';

const falsey = Object.freeze([null, false, 0, NaN, '']);

describe('isUndefined', () => {
  it('should be a function', () => {
    expect(isUndefined).toBeInstanceOf(Function);
  });

  const args = arguments;

  it('should return `true` for `undefined` values', () => {
    expect(isUndefined(undefined)).toBe(true);
  });

  it('should return `false` for non `undefined` values', () => {
    const expected = falsey.map(value => value === undefined);

    const actual = falsey.map(value => isUndefined(value));

    expect(actual).toEqual(expected);

    expect(isUndefined(args)).toBe(false);
    expect(isUndefined([1, 2, 3])).toBe(false);
    expect(isUndefined(true)).toBe(false);
    expect(isUndefined(new Date())).toBe(false);
    expect(isUndefined(new Error())).toBe(false);
    expect(isUndefined(isUndefined)).toBe(false);
    expect(isUndefined({a: 1})).toBe(false);
    expect(isUndefined(1)).toBe(false);
    expect(isUndefined(/x/)).toBe(false);
    expect(isUndefined('a')).toBe(false);
  });
});
