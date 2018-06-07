import {isSafeInteger} from '../index';

describe('isSafeInteger', () => {
  it('is a function', () => {
    expect(typeof isSafeInteger).toBe('function');
  });

  it('should return true', () => {
    isSafeInteger(0);
    isSafeInteger(-0);
    isSafeInteger(1);
    isSafeInteger(-100000);
    isSafeInteger(Number.MAX_SAFE_INTEGER);
    isSafeInteger(Number.MIN_SAFE_INTEGER);
  });

  it('should return false', () => {
    isSafeInteger(Number.MAX_SAFE_INTEGER + 1);
    isSafeInteger(Number.MIN_SAFE_INTEGER - 1);
    isSafeInteger(0.1);
    isSafeInteger(-0.1);
    isSafeInteger(Math.PI);
    isSafeInteger(NaN);
    isSafeInteger(Infinity);
    isSafeInteger(-Infinity);
    isSafeInteger('10');
    isSafeInteger(true);
    isSafeInteger(false);
    isSafeInteger([1]);
  });
});
