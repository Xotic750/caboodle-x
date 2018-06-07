import {isCountingNumber} from '../index';

describe('isCountingNumber', () => {
  it('should be a function', () => {
    expect(isCountingNumber).toBeInstanceOf(Function);
  });

  it('should return true', () => {
    expect(isCountingNumber(1)).toBe(true);
    expect(isCountingNumber(2)).toBe(true);
    expect(isCountingNumber(Number.MAX_SAFE_INTEGER)).toBe(true);
  });

  it('should return false', () => {
    expect(isCountingNumber(0)).toBe(false);
    expect(isCountingNumber(-1)).toBe(false);
    expect(isCountingNumber(1.1)).toBe(false);
    expect(isCountingNumber(Infinity)).toBe(false);
    expect(isCountingNumber(Number.MAX_VALUE)).toBe(false);
  });
});
