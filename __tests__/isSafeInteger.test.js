import {isSafeInteger} from '../index';

describe('isSafeInteger', () => {
  it('is a function', () => {
    expect(typeof isSafeInteger).toBe('function');
  });

  it('should return true', () => {
    expect(isSafeInteger(0)).toBe(true);
    expect(isSafeInteger(-0)).toBe(true);
    expect(isSafeInteger(1)).toBe(true);
    expect(isSafeInteger(-100000)).toBe(true);
    expect(isSafeInteger(Number.MAX_SAFE_INTEGER)).toBe(true);
    expect(isSafeInteger(Number.MIN_SAFE_INTEGER)).toBe(true);
  });

  it('should return false', () => {
    expect(isSafeInteger(Number.MAX_SAFE_INTEGER + 1)).toBe(false);
    expect(isSafeInteger(Number.MIN_SAFE_INTEGER - 1)).toBe(false);
    expect(isSafeInteger(0.1)).toBe(false);
    expect(isSafeInteger(-0.1)).toBe(false);
    expect(isSafeInteger(Math.PI)).toBe(false);
    expect(isSafeInteger(NaN)).toBe(false);
    expect(isSafeInteger(Infinity)).toBe(false);
    expect(isSafeInteger(-Infinity)).toBe(false);
    expect(isSafeInteger('10')).toBe(false);
    expect(isSafeInteger(true)).toBe(false);
    expect(isSafeInteger(false)).toBe(false);
    expect(isSafeInteger([1])).toBe(false);
  });
});
