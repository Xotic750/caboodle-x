import {isUpperCased} from '../index';

describe('isUpperCased', () => {
  it('not uppercased', () => {
    expect(isUpperCased()).toBe(false, 'undefined is not uppercased');
    expect(isUpperCased(null)).toBe(false, 'null is not uppercased');
    expect(isUpperCased(false)).toBe(false, 'false is not uppercased');
    expect(isUpperCased(true)).toBe(false, 'true is not uppercased');
    expect(isUpperCased(42)).toBe(false, 'number is not uppercased');
    expect(isUpperCased('foo')).toBe(false, 'string is not uppercased');
    expect(isUpperCased([])).toBe(false, 'array is not uppercased');
    expect(isUpperCased({})).toBe(false, 'object is not uppercased');
    expect(isUpperCased(() => {})).toBe(false, 'function is not uppercased');
    expect(isUpperCased(/a/g)).toBe(false, 'regex literal is not uppercased');
  });

  it('uppercase', () => {
    expect(isUpperCased('DASD')).toBe(true, 'uppercased');
  });
});
