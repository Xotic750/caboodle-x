import {isPrimitive} from '../index';
import noop from './helpers/noop';

const hasSymbol = typeof Symbol === 'function' && typeof Symbol('') === 'symbol';

const ifSymbolIt = hasSymbol ? it : xit;

describe('isPrimitive', () => {
  it('should return true when primitive value', () => {
    expect(isPrimitive()).toBe(true);
    expect(isPrimitive(undefined)).toBe(true);
    expect(isPrimitive(null)).toBe(true);
    expect(isPrimitive(0)).toBe(true);
    expect(isPrimitive(1)).toBe(true);
    expect(isPrimitive('foo')).toBe(true);
    expect(isPrimitive(true)).toBe(true);
    expect(isPrimitive(false)).toBe(true);
    expect(isPrimitive(NaN)).toBe(true);
    expect(isPrimitive(Infinity)).toBe(true);
  });

  ifSymbolIt('should return true when primitive Symbol', () => {
    expect(isPrimitive(Symbol('x'))).toBe(true);
  });

  it('should return false when not primitive value', () => {
    expect(isPrimitive({})).toBe(false);
    expect(isPrimitive([])).toBe(false);
    expect(isPrimitive(/./)).toBe(false);
    expect(isPrimitive(noop)).toBe(false);
    expect(isPrimitive(new Date())).toBe(false);
    expect(isPrimitive(Object(1))).toBe(false);
    expect(isPrimitive(Object(''))).toBe(false);
    expect(isPrimitive(Object(true))).toBe(false);
  });

  ifSymbolIt('should return false when object Symbol', () => {
    expect(isPrimitive(Object(Symbol('x')))).toBe(false);
  });
});
