import {isNil} from '../index';

describe('isNil', () => {
  it('should be a function', () => {
    expect(isNil).toBeInstanceOf(Function);
  });

  it('should return true for `undefined` or `null`', () => {
    expect(isNil()).toBe(true);
    expect(isNil(undefined)).toBe(true);
    expect(isNil(null)).toBe(true);
  });

  it('should return false for anything else', () => {
    expect(isNil(true)).toBe(false);
    expect(isNil(1)).toBe(false);
    expect(isNil('')).toBe(false);
    expect(isNil([])).toBe(false);
    expect(isNil({})).toBe(false);
  });
});
