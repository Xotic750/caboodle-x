import {isStringTypeOrNumberType} from '../src/caboodle-x';

describe('isStringTypeOrNumberType', () => {
  it('should be a function', () => {
    expect(isStringTypeOrNumberType).toBeInstanceOf(Function);
  });

  it('should return true', () => {
    expect(isStringTypeOrNumberType('')).toBe(true);
    expect(isStringTypeOrNumberType(1.1)).toBe(true);
    expect(isStringTypeOrNumberType(Infinity)).toBe(true);
    expect(isStringTypeOrNumberType(NaN)).toBe(true);
  });

  it('should return false', () => {
    expect(isStringTypeOrNumberType(Object('NaN'))).toBe(false);
    expect(isStringTypeOrNumberType(true)).toBe(false);
    expect(isStringTypeOrNumberType(null)).toBe(false);
    expect(isStringTypeOrNumberType(undefined)).toBe(false);
  });
});
