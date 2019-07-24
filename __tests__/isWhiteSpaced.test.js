import {isWhiteSpaced} from '../src/caboodle-x';

describe('isWhiteSpaced', () => {
  it('not whitespaced', () => {
    expect(isWhiteSpaced()).toBe(false, 'undefined is not whitespaced');
    expect(isWhiteSpaced(null)).toBe(false, 'null is not whitespaced');
    expect(isWhiteSpaced(false)).toBe(false, 'false is not whitespaced');
    expect(isWhiteSpaced(true)).toBe(false, 'true is not whitespaced');
    expect(isWhiteSpaced(42)).toBe(false, 'number is not whitespaced');
    expect(isWhiteSpaced('foo')).toBe(false, 'string is not whitespaced');
    expect(isWhiteSpaced('')).toBe(false, 'string is not whitespaced');
    expect(isWhiteSpaced([])).toBe(false, 'array is not whitespaced');
    expect(isWhiteSpaced({})).toBe(false, 'object is not whitespaced');
    expect(isWhiteSpaced(() => {})).toBe(false, 'function is not whitespaced');
    expect(isWhiteSpaced(/a/g)).toBe(false, 'regex literal is not whitespaced');
  });

  it('whitespaced', () => {
    expect(isWhiteSpaced(' ')).toBe(true, 'only whitespace');
    expect(isWhiteSpaced(' dsad')).toBe(true, 'whitespaced start');
    expect(isWhiteSpaced('dsad ')).toBe(true, 'whitespaced end');
    expect(isWhiteSpaced('ds ad')).toBe(true, 'whitespaced middle');
  });
});
