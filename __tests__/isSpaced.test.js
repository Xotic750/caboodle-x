import {isSpaced} from '../index';

describe('isSpaced', () => {
  it('not spaced', () => {
    expect(isSpaced()).toBe(false, 'undefined is not spaced');
    expect(isSpaced(null)).toBe(false, 'null is not spaced');
    expect(isSpaced(false)).toBe(false, 'false is not spaced');
    expect(isSpaced(true)).toBe(false, 'true is not spaced');
    expect(isSpaced(42)).toBe(false, 'number is not spaced');
    expect(isSpaced('foo')).toBe(false, 'string is not spaced');
    expect(isSpaced('')).toBe(false, 'string is not spaced');
    expect(isSpaced([])).toBe(false, 'array is not spaced');
    expect(isSpaced({})).toBe(false, 'object is not spaced');
    expect(isSpaced(() => {})).toBe(false, 'function is not spaced');
    expect(isSpaced(/a/g)).toBe(false, 'regex literal is not spaced');
  });

  it('spaced', () => {
    expect(isSpaced(' ')).toBe(true, 'only space');
    expect(isSpaced(' dsad')).toBe(true, 'spaced start');
    expect(isSpaced('dsad ')).toBe(true, 'spaced end');
    expect(isSpaced('ds ad')).toBe(true, 'spaced middle');
  });
});
