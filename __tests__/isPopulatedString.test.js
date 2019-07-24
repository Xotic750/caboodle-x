import {isPopulatedString} from 'src/caboodle-x';
import noop from './helpers/noop';

const hasSymbol = typeof Symbol === 'function' && typeof Symbol('') === 'symbol';

const ifSymbolIt = hasSymbol ? it : xit;

describe('isPopulatedString', () => {
  it('should return false when primitive non-string value', () => {
    expect(isPopulatedString()).toBe(false);
    expect(isPopulatedString(undefined)).toBe(false);
    expect(isPopulatedString(null)).toBe(false);
    expect(isPopulatedString(0)).toBe(false);
    expect(isPopulatedString(1)).toBe(false);
    expect(isPopulatedString(true)).toBe(false);
    expect(isPopulatedString(false)).toBe(false);
    expect(isPopulatedString(NaN)).toBe(false);
    expect(isPopulatedString(Infinity)).toBe(false);
  });

  ifSymbolIt('should return true when primitive Symbol', () => {
    expect(isPopulatedString(Symbol('x'))).toBe(false);
  });

  it('should return false when not primitive value', () => {
    expect(isPopulatedString({})).toBe(false);
    expect(isPopulatedString([])).toBe(false);
    expect(isPopulatedString(/./)).toBe(false);
    expect(isPopulatedString(noop)).toBe(false);
    expect(isPopulatedString(new Date())).toBe(false);
    expect(isPopulatedString(Object(1))).toBe(false);
    expect(isPopulatedString(Object(true))).toBe(false);
  });

  it('should return false when primitive string empty or only whitespace', () => {
    expect(isPopulatedString('')).toBe(false);
    expect(isPopulatedString(' ')).toBe(false);
    expect(isPopulatedString('\t\n')).toBe(false);
  });

  it('should return false when object string empty or only whitespace', () => {
    expect(isPopulatedString(Object(''))).toBe(false);
    expect(isPopulatedString(Object(' '))).toBe(false);
    expect(isPopulatedString(Object('\t\n'))).toBe(false);
  });

  it('should return true when primitive string is not empty or only whitespace', () => {
    expect(isPopulatedString('a')).toBe(true);
    expect(isPopulatedString(' a')).toBe(true);
    expect(isPopulatedString('\t\na')).toBe(true);
  });

  it('should return true when object string is not empty or only whitespace', () => {
    expect(isPopulatedString('a')).toBe(true);
    expect(isPopulatedString(' a')).toBe(true);
    expect(isPopulatedString('\t\na')).toBe(true);
  });

  ifSymbolIt('should return false when object Symbol', () => {
    expect(isPopulatedString(Object(Symbol('x')))).toBe(false);
  });
});
