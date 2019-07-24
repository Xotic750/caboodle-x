import toFinite from '../src/toFinite';

describe('toFinite', () => {
  it('general', () => {
    expect(toFinite()).toBe(0);
    expect(toFinite(null)).toBe(0);
    expect(toFinite(false)).toBe(0);
    expect(toFinite(true)).toBe(1);
    expect(toFinite(42)).toBe(42);
    expect(toFinite('')).toBe(0);
    expect(toFinite(' ')).toBe(0);
    expect(toFinite([])).toBe(0);
    expect(toFinite({})).toBe(0);
    expect(toFinite(() => {})).toBe(0);
    expect(toFinite(/a/g)).toBe(0);
  });

  it('non finites', () => {
    expect(toFinite(NaN)).toBe(0);
    expect(toFinite(Infinity)).toBe(Number.MAX_VALUE);
    expect(toFinite(-Infinity)).toBe(-Number.MAX_VALUE);
  });

  it('zeros', () => {
    expect(Object.is(toFinite(0), 0)).toBe(true);
    expect(Object.is(toFinite(-0), -0)).toBe(true);
  });
});
