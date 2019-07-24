import {sign} from 'src/caboodle-x';

import isPositiveZero from './helpers/isPositiveZero';
import isNegativeZero from './helpers/isNegativeZero';

describe('sign', () => {
  describe('basic', () => {
    it('sign is a function', () => {
      expect(typeof sign).toBe('function');
    });
  });

  describe('sign', () => {
    it('has the right arity', () => {
      expect(sign).toHaveLength(1);
    });

    it('should be correct', () => {
      // we also verify that [[ToNumber]] is being called
      [Infinity, 1, '0o10', '0b10', ' \t\r\n1 \t\r\n'].forEach((value) => {
        expect(sign(value)).toBe(1);
        expect(sign(String(value))).toBe(1);
      });
      expect(sign(true)).toBe(1);

      [-Infinity, -1].forEach((value) => {
        expect(sign(value)).toBe(-1);
        expect(sign(String(value))).toBe(-1);
      });

      expect(isPositiveZero(sign(+0))).toBe(true);
      expect(isPositiveZero(sign('0'))).toBe(true);
      expect(isPositiveZero(sign('+0'))).toBe(true);
      expect(isPositiveZero(sign(''))).toBe(true);
      expect(isPositiveZero(sign(' '))).toBe(true);
      expect(isPositiveZero(sign(null))).toBe(true);
      expect(isPositiveZero(sign(false))).toBe(true);
      expect(isNegativeZero(sign(-0))).toBe(true);
      expect(isNegativeZero(sign('-0'))).toBe(true);
      expect(Number.isNaN(sign(NaN))).toBe(true);
      expect(Number.isNaN(sign('\u0085\u200b\ufffe0\u0085\u200b\ufffe'))).toBe(true);
      expect(Number.isNaN(sign('\u180e0\u180e'))).toBe(true);
      expect(Number.isNaN(sign('NaN'))).toBe(true);
      expect(Number.isNaN(sign(undefined))).toBe(true);
    });
  });
});
