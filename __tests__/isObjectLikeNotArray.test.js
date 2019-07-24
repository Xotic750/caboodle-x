import {isObjectLikeNotArray} from '../src/caboodle-x';

describe('isObjectLikeNotArray', () => {
  it('should be a function', () => {
    expect(isObjectLikeNotArray).toBeInstanceOf(Function);
  });

  it('should return `true` for objects', () => {
    /* eslint-disable-next-line no-undef */
    expect(isObjectLikeNotArray(arguments)).toBe(true);
    expect(isObjectLikeNotArray(Object(false))).toBe(true);
    expect(isObjectLikeNotArray(new Date())).toBe(true);
    expect(isObjectLikeNotArray(new Error())).toBe(true);
    expect(isObjectLikeNotArray({a: 1})).toBe(true);
    expect(isObjectLikeNotArray(Object(0))).toBe(true);
    expect(isObjectLikeNotArray(/x/)).toBe(true);
    expect(isObjectLikeNotArray(Object('a'))).toBe(true);
  });

  it('should return `false` for non-objects', () => {
    const hasSymbol = typeof Symbol === 'function' && typeof Symbol('') === 'symbol';
    const symbol = hasSymbol && Symbol('');
    const values = ['', 0, false, NaN, null, undefined, true, 1, 'a', symbol];
    const expected = values.map(() => false);

    const actual = values.map((value, index) => (index ? isObjectLikeNotArray(value) : isObjectLikeNotArray()));

    expect(actual).toStrictEqual(expected);
    expect(isObjectLikeNotArray([1, 2, 3])).toBe(false);
  });
});
