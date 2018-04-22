import {isValidHtml4Id} from '../index';

describe('isValidHtml4Id', () => {
  it('should be a function', () => {
    expect(isValidHtml4Id).toBeInstanceOf(Function);
  });

  it('should return true', () => {
    expect(isValidHtml4Id('hello')).toBe(true);
    expect(isValidHtml4Id('abc1')).toBe(true);
    expect(isValidHtml4Id(Object('NaN'))).toBe(true);
  });

  it('should return false', () => {
    expect(isValidHtml4Id('a b')).toBe(false);
    expect(isValidHtml4Id('1abc')).toBe(false);
    expect(isValidHtml4Id('0')).toBe(false);
    expect(isValidHtml4Id('0x')).toBe(false);
    expect(isValidHtml4Id('+0x0')).toBe(false);
    expect(isValidHtml4Id('-0x0')).toBe(false);
    expect(isValidHtml4Id('0xG')).toBe(false);
    expect(isValidHtml4Id(true)).toBe(false);
    expect(isValidHtml4Id(null)).toBe(false);
    expect(isValidHtml4Id(undefined)).toBe(false);
    expect(isValidHtml4Id(1)).toBe(false);
    expect(isValidHtml4Id('')).toBe(false);
  });
});
