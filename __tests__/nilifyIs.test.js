import {nilifyIs} from '../index';

describe('nilifyIs', () => {
  it('should be a function', () => {
    expect(nilifyIs).toBeInstanceOf(Function);
  });

  it('should return true', () => {
    const isArrayNilified = nilifyIs(Array.isArray);

    expect(isArrayNilified([])).toBe(true);
    expect(isArrayNilified(undefined)).toBe(true);
    expect(isArrayNilified(null)).toBe(true);
  });

  it('should return false', () => {
    const isArrayNilified = nilifyIs(Array.isArray);

    expect(isArrayNilified({})).toBe(false);
    expect(isArrayNilified(0)).toBe(false);
    expect(isArrayNilified('')).toBe(false);
    expect(isArrayNilified(true)).toBe(false);
  });
});
