import {parseInteger} from '../index';

const hasSymbol =
  typeof Symbol === 'function' && typeof Symbol('') === 'symbol';

const ifSymbolIt = hasSymbol ? it : xit;

describe('parseInteger', () => {
  const ws2016 = [
    '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004',
    '\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF',
  ].join('');

  const whitespace = [
    '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004',
    '\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF',
  ].join('');

  describe('basic', () => {
    it('parseInteger is a function', () => {
      expect(typeof parseInteger).toBe('function');
    });
  });

  describe('parseInteger', () => {
    it('accepts a radix', () => {
      for (let i = 2; i <= 36; i += 1) {
        expect(parseInteger('10', i)).toBe(i);
      }
    });

    it('defaults the radix to 10 when the number does not start with 0x or 0X', () => {
      ['01', '08', '10', '42'].forEach((str) => {
        expect(parseInteger(str)).toBe(parseInteger(str, 10));
      });
    });

    it('defaults the radix to 16 when the number starts with 0x or 0X', () => {
      expect(parseInteger('0x16')).toBe(parseInteger('0x16', 16));
      expect(parseInteger('0X16')).toBe(parseInteger('0X16', 16));
    });

    it('ignores leading whitespace', () => {
      expect(parseInteger('  0x16')).toBe(parseInteger('0x16', 16));
      expect(parseInteger('  42')).toBe(parseInteger('42', 10));
      expect(parseInteger('  08')).toBe(parseInteger('08', 10));
      expect(parseInteger(`${whitespace}08`)).toBe(parseInteger('08', 10));
      expect(parseInteger(`${whitespace}0x16`)).toBe(parseInteger('0x16', 16));
    });

    it('leading whitespace 2016 should return NaN', () => {
      expect(Number.isNaN(parseInteger(`${ws2016}08`))).toBe(true);
      expect(Number.isNaN(parseInteger(`${ws2016}0x16`))).toBe(true);
    });

    it('defaults the radix properly when not a true number', () => {
      const fakeZero = {
        valueOf() {
          return 0;
        },
      };

      expect(parseInteger('08', fakeZero)).toBe(parseInteger('08', 10));
      expect(parseInteger('0x16', fakeZero)).toBe(parseInteger('0x16', 16));
    });

    it('allows sign-prefixed hex values', () => {
      expect(parseInteger('-0xF')).toBe(-15);
      expect(parseInteger('-0xF', 16)).toBe(-15);
      expect(parseInteger('+0xF')).toBe(15);
      expect(parseInteger('+0xF', 16)).toBe(15);
    });

    it('NaN parsing', () => {
      expect(parseInteger()).toBeNaN();
      expect(parseInteger(undefined)).toBeNaN();
      expect(parseInteger(null)).toBeNaN();
      expect(parseInteger(NaN)).toBeNaN();
    });

    it('should throw if target is not coercible', () => {
      expect(() => {
        parseInteger(Object.create(null));
      }).toThrowErrorMatchingSnapshot();
    });

    ifSymbolIt('should throw for Symbol', () => {
      const sym = Symbol('foo');
      expect(() => {
        parseInteger(sym);
      }).toThrowErrorMatchingSnapshot();

      const symObj = Object(sym);
      expect(() => {
        parseInteger(Object(symObj));
      }).toThrowErrorMatchingSnapshot();
    });
  });
});
