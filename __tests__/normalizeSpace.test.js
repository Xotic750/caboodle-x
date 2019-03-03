import {normalizeSpace} from '../index';

const hasSymbol = typeof Symbol === 'function' && typeof Symbol('') === 'symbol';

const ifSymbolIt = hasSymbol ? it : xit;

describe('normalizeSpace', () => {
  const allWhitespaceChars = [
    '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004',
    '\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF',
  ].join('');

  describe('basic', () => {
    it('normalizeSpace is a function', () => {
      expect(typeof normalizeSpace).toBe('function');
    });
  });

  describe('normalizeSpace', () => {
    it('should throw when target is null or undefined', () => {
      expect(() => {
        normalizeSpace();
      }).toThrowErrorMatchingSnapshot();

      expect(() => {
        normalizeSpace(undefined);
      }).toThrowErrorMatchingSnapshot();

      expect(() => {
        normalizeSpace(null);
      }).toThrowErrorMatchingSnapshot();
    });

    it('basic tests', () => {
      expect(normalizeSpace('a')).toBe('a', 'noop when no whitespace');
      expect(normalizeSpace(`${allWhitespaceChars}a${allWhitespaceChars}b${allWhitespaceChars}`)).toBe(
        'a b',
        'all expected whitespace chars are trimmed and normalized',
      );

      const zeroWidth = '\u200b';
      expect(normalizeSpace(zeroWidth)).toBe(zeroWidth, 'zero width space does not normalize');
    });

    it('should return a string for everything', () => {
      const values = [true, 'abc', 1, function() {}, [], /r/];

      const reNormalize = new RegExp(`[${allWhitespaceChars}]+`, 'g');
      const expected = values.map((value) => String(value).replace(reNormalize, ' '));

      const actual = values.map(normalizeSpace);
      expect(actual).toStrictEqual(expected);
    });

    it('should throw for Object.create(null)', () => {
      expect(() => {
        normalizeSpace(Object.create(null));
      }).toThrowErrorMatchingSnapshot();
    });

    ifSymbolIt('should throw for Symbol', () => {
      const sym = Symbol('foo');
      expect(() => {
        normalizeSpace(sym);
      }).toThrowErrorMatchingSnapshot();

      const symObj = Object(sym);
      expect(() => {
        normalizeSpace(Object(symObj));
      }).toThrowErrorMatchingSnapshot();
    });
  });
});
