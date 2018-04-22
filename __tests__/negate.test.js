import {negate, toObject} from '../index';

describe('negate', () => {
  it('should be a function', () => {
    expect(negate).toBeInstanceOf(Function);
  });

  it('should throw TypeError', () => {
    expect(() => {
      negate();
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      negate(undefined);
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      negate(null);
    }).toThrowErrorMatchingSnapshot();
  });

  it('should negate a predicate', () => {
    const notIsArray = negate(Array.isArray);

    expect(notIsArray([])).toBe(false);
    expect(notIsArray({})).toBe(true);
    expect(notIsArray(1)).toBe(true);
    expect(notIsArray(true)).toBe(true);
    expect(notIsArray('')).toBe(true);
    expect(notIsArray()).toBe(true);
    expect(notIsArray(undefined)).toBe(true);
    expect(notIsArray(null)).toBe(true);
  });
});
