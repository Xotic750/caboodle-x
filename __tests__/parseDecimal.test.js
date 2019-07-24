import {parseDecimal} from 'src/caboodle-x';

describe('parseDecimal', () => {
  it('parseDecimal is a function', () => {
    expect(typeof parseDecimal).toBe('function');
  });

  describe('parseDecimal', () => {
    it('ignores leading whitespace', () => {
      expect(parseDecimal('  42')).toBe(Number.parseInt('42', 10));
    });

    it('ignores trailing whitespace', () => {
      expect(parseDecimal('42   ')).toBe(Number.parseInt('42', 10));
    });

    it('ignores leading and trailing whitespace', () => {
      expect(parseDecimal('  42   ')).toBe(Number.parseInt('42', 10));
    });

    it('ignores only parses the integer part', () => {
      expect(parseDecimal('  42.1   ')).toBe(Number.parseInt('42', 10));
      expect(parseDecimal('  42A   ')).toBe(Number.parseInt('42', 10));
    });

    it('naN parsing', () => {
      expect(parseDecimal()).toBeNaN();
      expect(parseDecimal(undefined)).toBeNaN();
      expect(parseDecimal(null)).toBeNaN();
      expect(parseDecimal(NaN)).toBeNaN();
    });

    it('should throw if target is not coercible', () => {
      expect(() => {
        parseDecimal(Object.create(null));
      }).toThrowErrorMatchingSnapshot();
    });
  });
});
