import {isStringType} from '../index';

describe('isStringType', () => {
  it('should be a function', () => {
    expect(isStringType).toBeInstanceOf(Function);
  });

  it('should return true', () => {
    expect(isStringType('')).toBe(true);
  });

  it('should return false', () => {
    expect(isStringType(Object('NaN'))).toBe(false);
    expect(isStringType(true)).toBe(false);
    expect(isStringType(null)).toBe(false);
    expect(isStringType(undefined)).toBe(false);
  });
});
