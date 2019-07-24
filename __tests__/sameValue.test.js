import {sameValue} from 'src/caboodle-x';

const hasSymbols = typeof Symbol === 'function' && typeof Symbol('') === 'symbol';

const itHasSymbols = hasSymbols ? it : xit;

describe('sameValue', () => {
  it('sameValue a function', () => {
    expect(typeof sameValue).toBe('function');
  });

  it('works with primitives', () => {
    expect(sameValue()).toBe(true, 'two absent args are the same');
    expect(sameValue(undefined)).toBe(true, 'undefined & one absent arg are the same');
    expect(sameValue(undefined, undefined)).toBe(true, 'undefined sameValue undefined');
    expect(sameValue(null, null)).toBe(true, 'null sameValue null');
    expect(sameValue(true, true)).toBe(true, 'true sameValue true');
    expect(sameValue(false, false)).toBe(true, 'false sameValue false');
    expect(sameValue(true, false)).toBe(false, 'true sameValue not false');
  });

  it('works with NaN', () => {
    expect(sameValue(NaN, NaN)).toBe(true, 'NaN sameValue NaN');
  });

  it('differentiates zeroes', () => {
    expect(sameValue(0, 0)).toBe(true, '+0 sameValue +0');
    expect(sameValue(-0, -0)).toBe(true, '-0 sameValue -0');
    expect(sameValue(0, -0)).toBe(false, '+0 sameValue not -0');
  });

  it('nonzero numbers', () => {
    expect(sameValue(Infinity, Infinity)).toBe(true, 'infinity sameValue infinity');
    expect(sameValue(-Infinity, -Infinity)).toBe(true, 'infinity sameValue infinity');
    expect(sameValue(42, 42)).toBe(true, '42 sameValue 42');
    expect(sameValue(42, -42)).toBe(false, '42 sameValue not -42');
  });

  it('strings', () => {
    expect(sameValue('', '')).toBe(true, 'empty string sameValue empty string');
    expect(sameValue('foo', 'foo')).toBe(true, 'string sameValue string');
    expect(sameValue('foo', 'bar')).toBe(false, 'string sameValue not different string');
  });

  it('objects', () => {
    const obj = {};
    expect(sameValue(obj, obj)).toBe(true, 'object sameValue same object');
    expect(sameValue(obj, {})).toBe(false, 'object sameValue not different object');
  });

  itHasSymbols('Symbols', () => {
    expect(sameValue(Symbol.iterator, Symbol.iterator)).toBe(true, 'Symbol.iterator sameValue itself');
    expect(sameValue(Symbol(''), Symbol(''))).toBe(false, 'different Symbols are not equal');
    expect(sameValue(Symbol.iterator, Object(Symbol.iterator))).toBe(false, 'Symbol.iterator sameValue not boxed form of itself');
  });
});
