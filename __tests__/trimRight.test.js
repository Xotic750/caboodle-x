import {trimRight} from '../dist/caboodle-x';

/* istanbul ignore next */
const hasSymbol =
  typeof Symbol === 'function' && typeof Symbol('') === 'symbol';
/* istanbul ignore next */
const ifSymbolIt = hasSymbol ? it : xit;

describe('trimRight', () => {
  const allWhitespaceChars =
    '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

  describe('basic', () => {
    it('trimRight is a function', () => {
      expect(typeof trimRight).toBe('function');
    });
  });

  describe('trimRight', () => {
    it('should throw when target is null or undefined', () => {
      expect(() => {
        trimRight();
      }).toThrowErrorMatchingSnapshot();

      expect(() => {
        trimRight(undefined);
      }).toThrowErrorMatchingSnapshot();

      expect(() => {
        trimRight(null);
      }).toThrowErrorMatchingSnapshot();
    });

    it('Basic tests', () => {
      let rest = ' \t\na';
      expect(trimRight(`${rest} \t\n`)).toBe(
        rest,
        'strips whitespace off the left side',
      );
      expect(trimRight('a')).toBe('a', 'noop when no whitespace');
      rest = `${allWhitespaceChars}a`;
      expect(trimRight(rest + allWhitespaceChars)).toBe(
        rest,
        'all expected whitespace chars are trimmed',
      );
      const zeroWidth = '\u200b';
      expect(trimRight(zeroWidth)).toBe(
        zeroWidth,
        'zero width space does not trim',
      );
    });

    it('should return a string for everything', () => {
      const values = [
        true,
        'abc',
        1,
        /* istanbul ignore next */
        function () {},
        [],
        /r/,
      ];

      const expected = values.map(String);
      const actual = values.map(trimRight);
      expect(actual).toEqual(expected);
    });

    it('should throw for Object.create(null)', () => {
      expect(() => {
        trimRight(Object.create(null));
      }).toThrowErrorMatchingSnapshot();
    });

    ifSymbolIt('should throw for Symbol', () => {
      const sym = Symbol('foo');
      expect(() => {
        trimRight(sym);
      }).toThrowErrorMatchingSnapshot();

      const symObj = Object(sym);
      expect(() => {
        trimRight(symObj);
      }).toThrowErrorMatchingSnapshot();
    });
  });
});
