import {toStringTag} from '../index';

const hasSymbol = typeof Symbol === 'function' && typeof Symbol('') === 'symbol';

const symbolIt = hasSymbol ? it : xit;

describe('toStringTag', () => {
  it('should be a function', () => {
    expect(toStringTag).toBeInstanceOf(Function);
  });

  it('primitives', () => {
    expect(toStringTag()).toBe('[object Undefined]');
    expect(toStringTag(undefined)).toBe('[object Undefined]');
    expect(toStringTag(null)).toBe('[object Null]');
    expect(toStringTag(1)).toBe('[object Number]');
    expect(toStringTag(true)).toBe('[object Boolean]');
    expect(toStringTag('x')).toBe('[object String]');
  });

  it('primitives as objects', () => {
    expect(toStringTag(Object(1))).toBe('[object Number]');
    expect(toStringTag(Object(true))).toBe('[object Boolean]');
    expect(toStringTag(Object('x'))).toBe('[object String]');
  });

  it('common objects', () => {
    expect(toStringTag([1, 2, 3])).toBe('[object Array]');
    expect(toStringTag({})).toBe('[object Object]');
    expect(toStringTag(describe)).toBe('[object Function]');
    expect(toStringTag(new Date())).toBe('[object Date]');
    expect(toStringTag(new Error('x'))).toBe('[object Error]');
  });

  symbolIt('Symbol', () => {
    expect(toStringTag(Symbol(''))).toBe('[object Symbol]');
    expect(toStringTag(Object(Symbol('')))).toBe('[object Symbol]');
  });
});
