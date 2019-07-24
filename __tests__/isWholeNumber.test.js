import {isWholeNumber} from 'src/caboodle-x';

describe('isWholeNumber', () => {
  it('should be a function', () => {
    expect(isWholeNumber).toBeInstanceOf(Function);
  });

  it('should return true', () => {
    expect(isWholeNumber(0)).toBe(true);
    expect(isWholeNumber(1)).toBe(true);
    expect(isWholeNumber(2)).toBe(true);
    expect(isWholeNumber(Number.MAX_SAFE_INTEGER)).toBe(true);
  });

  it('should return false', () => {
    expect(isWholeNumber(-1)).toBe(false);
    expect(isWholeNumber(1.1)).toBe(false);
    expect(isWholeNumber(Infinity)).toBe(false);
    expect(isWholeNumber(Number.MAX_VALUE)).toBe(false);
  });
});
