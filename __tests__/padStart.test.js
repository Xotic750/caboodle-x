import {padStart} from '../index';

describe('padStart', () => {
  it('is a function', () => {
    expect(typeof padStart).toBe('function');
  });

  it('should throw when target is null or undefined', () => {
    expect(() => {
      padStart();
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      padStart(undefined);
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      padStart(null);
    }).toThrowErrorMatchingSnapshot();
  });

  it('normal cases', () => {
    expect(padStart('a', 3, 'b')).toBe('bba', 'string pads start with single character');
    expect(padStart('abc', 3, 'd')).toBe('abc', 'string already of maximum length noops');
    expect(padStart('abc', -3, 'd')).toBe('abc', 'string already larger than maximum length noops');
    expect(padStart('cd', 3, 'ab')).toBe('acd', 'string with maximum length equal to length plus filler length, pads');
    expect(padStart('abc')).toBe('abc', 'absent maximum length is noop');
    expect(padStart('a', 3)).toBe('  a', 'absent fillStr defaults to a space');
    expect(padStart('ed', 6, null)).toBe('nulled', 'non-string fillStr gets stringified');
  });

  it('truncated fill string', () => {
    expect(padStart('a', 2, 'bc')).toBe('ba', 'truncates at the provided max length');
  });
});
