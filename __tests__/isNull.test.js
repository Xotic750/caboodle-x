import {isNull} from '../index';

const falsey = Object.freeze([undefined, false, 0, NaN, '']);

describe('isNull', () => {
  it('should be a function', () => {
    expect(isNull).toBeInstanceOf(Function);
  });

  const args = arguments;

  it('should return `true` for `null` values', () => {
    expect(isNull(null)).toBe(true);
  });

  it('should return `false` for non `null` values', () => {
    const expected = falsey.map(value => value === null);

    const actual = falsey.map(value => isNull(value));

    expect(actual).toEqual(expected);

    expect(isNull(args)).toBe(false);
    expect(isNull([1, 2, 3])).toBe(false);
    expect(isNull(true)).toBe(false);
    expect(isNull(new Date())).toBe(false);
    expect(isNull(new Error())).toBe(false);
    expect(isNull(isNull)).toBe(false);
    expect(isNull({a: 1})).toBe(false);
    expect(isNull(1)).toBe(false);
    expect(isNull(/x/)).toBe(false);
    expect(isNull('a')).toBe(false);
  });
});
