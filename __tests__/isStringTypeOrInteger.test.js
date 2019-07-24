import {isStringTypeOrInteger} from '../src/caboodle-x';

describe('isStringTypeOrInteger', () => {
  it('should be a function', () => {
    expect(isStringTypeOrInteger).toBeInstanceOf(Function);
  });

  it('should return true', () => {
    expect(isStringTypeOrInteger('')).toBe(true);
    expect(isStringTypeOrInteger(1)).toBe(true);
  });

  it('should return false', () => {
    expect(isStringTypeOrInteger(Object('NaN'))).toBe(false);
    expect(isStringTypeOrInteger(true)).toBe(false);
    expect(isStringTypeOrInteger(null)).toBe(false);
    expect(isStringTypeOrInteger(undefined)).toBe(false);
    expect(isStringTypeOrInteger(Infinity)).toBe(false);
    expect(isStringTypeOrInteger(1.1)).toBe(false);
  });
});
