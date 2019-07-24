import {isHex} from '../src/caboodle-x';

describe('isHex', () => {
  it('should be a function', () => {
    expect(isHex).toBeInstanceOf(Function);
  });

  it('should return true', () => {
    expect(isHex('0x0')).toBe(true);
    expect(isHex('0xFEDCBA0123456789')).toBe(true);
  });

  it('should return false', () => {
    expect(isHex('0')).toBe(false);
    expect(isHex('0x')).toBe(false);
    expect(isHex('+0x0')).toBe(false);
    expect(isHex('-0x0')).toBe(false);
    expect(isHex('0xG')).toBe(false);
    expect(isHex(Object('NaN'))).toBe(false);
    expect(isHex(true)).toBe(false);
    expect(isHex(null)).toBe(false);
    expect(isHex(undefined)).toBe(false);
    expect(isHex(1)).toBe(false);
    expect(isHex('')).toBe(false);
  });
});
