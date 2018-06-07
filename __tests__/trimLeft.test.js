import {trimLeft} from '../index';

const hasSymbol =
  typeof Symbol === 'function' && typeof Symbol('') === 'symbol';

const ifSymbolIt = hasSymbol ? it : xit;

describe('trimLeft', () => {
  const allWhitespaceChars =
    '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

  describe('basic', () => {
    it('trimLeft is a function', () => {
      expect(typeof trimLeft).toBe('function');
    });
  });

  describe('trimLeft', () => {
    it('should throw when target is null or undefined', () => {
      expect(() => {
        trimLeft();
      }).toThrowErrorMatchingSnapshot();

      expect(() => {
        trimLeft(undefined);
      }).toThrowErrorMatchingSnapshot();

      expect(() => {
        trimLeft(null);
      }).toThrowErrorMatchingSnapshot();
    });

    it('Basic tests', () => {
      let rest = 'a \t\n';
      expect(trimLeft(` \t\n${rest}`)).toBe(
        rest,
        'strips whitespace off the left side',
      );
      expect(trimLeft('a')).toBe('a', 'noop when no whitespace');
      rest = `a${allWhitespaceChars}`;
      expect(trimLeft(allWhitespaceChars + rest)).toBe(
        rest,
        'all expected whitespace chars are trimmed',
      );
      const zeroWidth = '\u200b';
      expect(trimLeft(zeroWidth)).toBe(
        zeroWidth,
        'zero width space does not trim',
      );
    });

    it('should return a string for everything', () => {
      const values = [true, 'abc', 1, function() {}, [], /r/];

      const expected = values.map(String);
      const actual = values.map(trimLeft);
      expect(actual).toEqual(expected);
    });

    it('should throw for Object.create(null)', () => {
      expect(() => {
        trimLeft(Object.create(null));
      }).toThrowErrorMatchingSnapshot();
    });

    ifSymbolIt('should throw for Symbol', () => {
      const sym = Symbol('foo');
      expect(() => {
        trimLeft(sym);
      }).toThrowErrorMatchingSnapshot();

      const symObj = Object(sym);
      expect(() => {
        trimLeft(symObj);
      }).toThrowErrorMatchingSnapshot();
    });
  });
});
