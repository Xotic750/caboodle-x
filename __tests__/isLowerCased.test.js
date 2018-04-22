import {isLowerCased} from '../index';

describe('isLowerCased', () => {
  it('not lowercased', () => {
    expect(isLowerCased()).toBe(false, 'undefined is not lowercased');
    expect(isLowerCased(null)).toBe(false, 'null is not lowercased');
    expect(isLowerCased(false)).toBe(false, 'false is not lowercased');
    expect(isLowerCased(true)).toBe(false, 'true is not lowercased');
    expect(isLowerCased(42)).toBe(false, 'number is not lowercased');
    expect(isLowerCased('FOO')).toBe(false, 'string is not lowercased');
    expect(isLowerCased([])).toBe(false, 'array is not lowercased');
    expect(isLowerCased({})).toBe(false, 'object is not lowercased');
    expect(isLowerCased(() => {})).toBe(false, 'function is not lowercased');
    expect(isLowerCased(/a/g)).toBe(false, 'regex literal is not lowercased');
  });

  it('lowercase', () => {
    expect(isLowerCased('dasd')).toBe(true, 'lowercased');
  });
});
