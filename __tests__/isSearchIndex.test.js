import {isSearchIndex} from '../index';

describe('isSearchIndex', () => {
  it('should be a function', () => {
    expect(isSearchIndex).toBeInstanceOf(Function);
  });

  it('should return true', () => {
    expect(isSearchIndex(-1)).toBe(true);
    expect(isSearchIndex(0)).toBe(true);
    expect(isSearchIndex(1)).toBe(true);
    expect(isSearchIndex(2)).toBe(true);
    expect(isSearchIndex(Number.MAX_SAFE_INTEGER)).toBe(true);
  });

  it('should return false', () => {
    expect(isSearchIndex(-2)).toBe(false);
    expect(isSearchIndex(1.1)).toBe(false);
    expect(isSearchIndex(Infinity)).toBe(false);
    expect(isSearchIndex(Number.MAX_VALUE)).toBe(false);
  });
});
