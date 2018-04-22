import {isSurrogatePair} from '../index';

describe('isSurrogatePair', () => {
  describe('Basic tests', () => {
    it('should return false for no input', () => {
      expect(isSurrogatePair()).toBe(false);
    });

    it('should confirm that these are not surrogate pairs', () => {
      const values = [
        'a',
        '\uDC04\uD87E',
        String.fromCharCode(0xdf81) + String.fromCharCode(0xd800),
      ];

      const expected = values.map(() => false);

      const actual1 = values.map(item =>
        isSurrogatePair(item.charAt(0), item.charAt(1)),
      );

      expect(actual1).toEqual(expected);

      const actual2 = values.map(item => isSurrogatePair(item));

      expect(actual2).toEqual(expected);

      expect(isSurrogatePair('\uDC04')).toBe(false);
      expect(isSurrogatePair('\uDC04\uDC04')).toBe(false);
      expect(isSurrogatePair('\uD87E\uDC04', '\uDC04')).toBe(false);
      expect(isSurrogatePair('\uD87E\uDC04', '\uDC04\uDC04')).toBe(false);
    });

    it('should confirm that these are surrogate pairs', () => {
      const values = [
        '𠮟',
        '\uD87E\uDC04',
        String.fromCharCode(0xd800) + String.fromCharCode(0xdf81),
      ];

      const expected = values.map(() => true);

      const actual1 = values.map(item =>
        isSurrogatePair(item.charAt(0), item.charAt(1)),
      );

      expect(actual1).toEqual(expected);

      const actual2 = values.map(item => isSurrogatePair(item));

      expect(actual2).toEqual(expected);
    });
  });
});
