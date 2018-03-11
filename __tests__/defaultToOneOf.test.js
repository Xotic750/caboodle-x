import {defaultToOneOf} from '../dist/caboodle-x';

describe('defaultToOneOf', () => {
  const array = Object.freeze([1, 2, 3, 4]);

  it('should be a function', () => {
    expect(defaultToOneOf).toBeInstanceOf(Function);
  });

  it('should return a match', () => {
    expect(defaultToOneOf(3, array)).toBe(3);
    expect(defaultToOneOf(3, array, 5)).toBe(3);
  });

  it('should return the default for no match', () => {
    expect(defaultToOneOf(6, array)).toBe(undefined);
    expect(defaultToOneOf(6, array, 5)).toBe(5);
  });
});
