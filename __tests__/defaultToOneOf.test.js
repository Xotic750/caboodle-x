import {defaultToOneOf} from '../index';

describe('defaultToOneOf', () => {
  const array = Object.freeze([1, 2, 3, 4]);

  it('should be a function', () => {
    expect(defaultToOneOf).toBeInstanceOf(Function);
  });

  it('should return a match', () => {
    expect(defaultToOneOf(array, 3)).toBe(3);
    expect(defaultToOneOf(array, 3, 5)).toBe(3);
  });

  it('should return the last value for no match', () => {
    expect(defaultToOneOf(array, 6)).toBe(4);
  });

  it('should return the fallback for no match', () => {
    expect(defaultToOneOf(array, 6, 5)).toBe(5);
  });
});
