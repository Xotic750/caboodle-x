import {toInteger} from '../index';

const uncoercibleObject = {
  toString() {
    return {};
  },
  valueOf() {
    return {};
  },
};

describe('toInteger', () => {
  it('toInteger is a function', () => {
    expect(typeof toInteger).toBe('function');
  });

  it('Basic', () => {
    expect(Object.is(0, toInteger(NaN))).toBe(true, 'NaN coerces to +0');
    [-0, 0, Infinity, 42].forEach(num => {
      expect(Object.is(num, toInteger(num))).toBe(
        true,
        `${num} returns itself`,
      );
      expect(Object.is(-num, toInteger(-num))).toBe(
        true,
        `-${num} returns itself`,
      );
    });

    expect(toInteger('0b10')).toBe(2, 'binary returns 2');
    expect(toInteger('0o10')).toBe(8, 'octal returns 8');
    expect(toInteger(' \t\r\n1 \t\r\n')).toBe(1, 'whitespaces are trimmed');
    expect(toInteger('\u0085\u200b\ufffe10\u0085\u200b\ufffe')).toBe(
      0,
      'non-whitespaces are not trimmed',
    );
    expect(toInteger('\u180e10\u180e')).toBe(
      0,
      'non-whitespaces are not trimmed',
    );
    expect(toInteger(Math.PI)).toBe(3, 'pi returns 3');
    expect(toInteger(-Math.PI)).toBe(-3, '-pi returns -3');
    expect(() => toInteger(uncoercibleObject)).toThrowErrorMatchingSnapshot();
  });
});
