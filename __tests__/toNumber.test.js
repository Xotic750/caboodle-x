import {toNumber} from '../index';

const hasSymbol = typeof Symbol === 'function' && typeof Symbol('') === 'symbol';

const ifSymbolIt = hasSymbol ? it : xit;

const coercibleObject = {
  toString() {
    return 42;
  },
  valueOf() {
    return 3;
  },
};

const valueOfOnlyObject = {
  toString() {
    return {};
  },
  valueOf() {
    return 4;
  },
};

const toStringOnlyObject = {
  toString() {
    return 7;
  },
  valueOf() {
    return {};
  },
};

const objects = [{}, coercibleObject, toStringOnlyObject, valueOfOnlyObject];

const uncoercibleObject = {
  toString() {
    return {};
  },
  valueOf() {
    return {};
  },
};

describe('toNumber', () => {
  const whitespace = [
    ' \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u2000\u2001\u2002',
    '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000',
  ].join('');

  const nonWhitespaces = {
    '\\u0085': '\u0085',
    '\\u180e': '\u180e',
    '\\u200b': '\u200b',
    '\\ufffe': '\ufffe',
  };

  describe('basic', () => {
    it('toNumber is a function', () => {
      expect(typeof toNumber).toBe('function');
    });
  });

  describe('toNumber', () => {
    it('coersion', () => {
      expect(Number.isNaN(toNumber(undefined))).toBe(true, 'undefined coerces to NaN');
      expect(toNumber(null)).toBe(0, 'null coerces to +0');
      expect(toNumber(false)).toBe(0, 'false coerces to +0');
      expect(toNumber(true)).toBe(1, 'true coerces to 1');
      expect(toNumber(' 1 ')).toBe(1, '` 1 `` coerces to 1');
    });

    it('numbers', () => {
      expect(Number.isNaN(toNumber(NaN))).toBe(true, 'NaN returns itself');

      [0, -0, 42, Infinity, -Infinity].forEach((num) => {
        expect(Object.is(toNumber(num), num)).toBe(true, `${num} returns itself`);
      });

      ['foo', '0', '4a', '2.0', 'Infinity', '-Infinity'].forEach((numString) => {
        expect(Object.is(toNumber(numString), Number(numString))).toBe(true, `"${numString}" coerces to ${Number(numString)}`);
      });
    });

    it('objects', () => {
      objects.forEach((object) => {
        expect(Object.is(toNumber(object), Number(object))).toBe(
          true,
          `object ${object} coerces to same as ToPrimitive of object does`,
        );
      });

      expect(() => {
        toNumber(uncoercibleObject);
      }).toThrowErrorMatchingSnapshot();
    });

    it('binary literals', () => {
      expect(toNumber('0b10')).toBe(2, '0b10 is 2');
      expect(
        toNumber({
          toString() {
            return '0b11';
          },
        }),
      ).toBe(3, 'Object that toStrings to 0b11 is 3');

      expect(Number.isNaN(toNumber('0b12'))).toBe(true, '0b12 is NaN');
      expect(
        Number.isNaN(
          toNumber({
            toString() {
              return '0b112';
            },
          }),
        ),
      ).toBe(true, 'Object that toStrings to 0b112 is NaN');
    });

    it('octal literals', () => {
      expect(toNumber('0o10')).toBe(8, '0o10 is 8');
      expect(
        toNumber({
          toString() {
            return '0o11';
          },
        }),
      ).toBe(9, 'Object that toStrings to 0o11 is 9');

      expect(Number.isNaN(toNumber('0o18'))).toBe(true, '0o18 is NaN');
      expect(
        Number.isNaN(
          toNumber({
            toString() {
              return '0o118';
            },
          }),
        ),
      ).toBe(true, 'Object that toStrings to 0o118 is NaN');
    });

    it('hex literals', () => {
      expect(toNumber('0xF')).toBe(15, '0xF is 15');
      expect(
        toNumber({
          toString() {
            return '0xA';
          },
        }),
      ).toBe(10, 'Object that toStrings to 0xA is 1');

      expect(Number.isNaN(toNumber('0xG'))).toBe(true, '0xG is NaN');
      expect(
        Number.isNaN(
          toNumber({
            toString() {
              return '0x11G';
            },
          }),
        ),
      ).toBe(true, 'Object that toStrings to 0x11G is NaN');
    });

    it('signed hex numbers', () => {
      expect(Number.isNaN(toNumber('-0xF'))).toBe(true, '-0xF is NaN');
      expect(Number.isNaN(toNumber(' -0xF '))).toBe(true, 'space-padded -0xF is NaN');
      expect(Number.isNaN(toNumber('+0xF'))).toBe(true, '+0xF is NaN');
      expect(Number.isNaN(toNumber(' +0xF '))).toBe(true, 'space-padded +0xF is NaN');
    });

    it('trimming of whitespace and non-whitespace characters', () => {
      expect(toNumber(whitespace + 0 + whitespace)).toBe(0, 'whitespace is trimmed');

      Object.keys(nonWhitespaces).forEach((desc) => {
        const nonWS = nonWhitespaces[desc];
        expect(Number.isNaN(toNumber(nonWS + 0 + nonWS))).toBe(true, `non-whitespace ${desc} not trimmed`);
      });
    });

    it('works with Dates', () => {
      expect(toNumber(new Date(0))).toBe(0);
      const ms = 1504449076121;
      expect(toNumber(new Date(ms))).toBe(ms);
    });

    it('should throw if target is not coercible', () => {
      expect(() => {
        toNumber(Object.create(null));
      }).toThrowErrorMatchingSnapshot();
    });

    ifSymbolIt('should throw for Symbol', () => {
      const sym = Symbol('foo');
      expect(() => {
        toNumber(sym);
      }).toThrowErrorMatchingSnapshot();

      const symObj = Object(sym);
      expect(() => {
        toNumber(Object(symObj));
      }).toThrowErrorMatchingSnapshot();
    });
  });
});
