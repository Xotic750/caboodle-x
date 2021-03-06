import {isObjectLike} from '../index';

describe('isObjectLike', () => {
  it('should be a function', () => {
    expect(isObjectLike).toBeInstanceOf(Function);
  });

  it('should return `true` for objects', () => {
    expect(isObjectLike(arguments)).toBe(true);
    expect(isObjectLike([1, 2, 3])).toBe(true);
    expect(isObjectLike(Object(false))).toBe(true);
    expect(isObjectLike(new Date())).toBe(true);
    expect(isObjectLike(new Error())).toBe(true);
    expect(isObjectLike({a: 1})).toBe(true);
    expect(isObjectLike(Object(0))).toBe(true);
    expect(isObjectLike(/x/)).toBe(true);
    expect(isObjectLike(Object('a'))).toBe(true);
  });

  it('should return `false` for non-objects', () => {
    const hasSymbol =
      typeof Symbol === 'function' && typeof Symbol('') === 'symbol';
    const symbol = hasSymbol && Symbol('');
    const values = ['', 0, false, NaN, null, undefined, true, 1, 'a', symbol];
    const expected = values.map(() => false);

    const actual = values.map(
      (value, index) => (index ? isObjectLike(value) : isObjectLike()),
    );

    expect(actual).toEqual(expected);
  });
});
