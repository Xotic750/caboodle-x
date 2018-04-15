import {trim} from '../dist/caboodle-x';

/* istanbul ignore next */
const hasSymbol =
  typeof Symbol === 'function' && typeof Symbol('') === 'symbol';
/* istanbul ignore next */
const ifSymbolIt = hasSymbol ? it : xit;

describe('trim', () => {
  const allWhitespaceChars =
    '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

  describe('basic', () => {
    it('trim is a function', () => {
      expect(typeof trim).toBe('function');
    });
  });

  describe('trim', () => {
    it('should throw when target is null or undefined', () => {
      expect(() => {
        trim();
      }).toThrowErrorMatchingSnapshot();

      expect(() => {
        trim(undefined);
      }).toThrowErrorMatchingSnapshot();

      expect(() => {
        trim(null);
      }).toThrowErrorMatchingSnapshot();
    });

    it('Basic tests', () => {
      expect(trim(' \t\na \t\n')).toBe(
        'a',
        'strips whitespace off the left and right side',
      );
      expect(trim('a')).toBe('a', 'noop when no whitespace');
      expect(trim(`${allWhitespaceChars}a${allWhitespaceChars}`)).toBe(
        'a',
        'all expected whitespace chars are trimmed',
      );
      const zeroWidth = '\u200b';
      expect(trim(zeroWidth)).toBe(zeroWidth, 'zero width space does not trim');
    });

    it('should return a string for everything', () => {
      const values = [
        true,
        'abc',
        1,
        /* istanbul ignore next */
        function() {},
        [],
        /r/,
      ];

      const expected = values.map(String);
      const actual = values.map(trim);
      expect(actual).toEqual(expected);
    });

    it('should throw for Object.create(null)', () => {
      expect(() => {
        trim(Object.create(null));
      }).toThrowErrorMatchingSnapshot();
    });

    ifSymbolIt('should throw for Symbol', () => {
      const sym = Symbol('foo');
      expect(() => {
        trim(sym);
      }).toThrowErrorMatchingSnapshot();

      const symObj = Object(sym);
      expect(() => {
        trim(symObj);
      }).toThrowErrorMatchingSnapshot();
    });
  });
});
