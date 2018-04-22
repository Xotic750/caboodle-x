import {isValidHtml5Id} from '../index';

describe('isValidHtml5Id', () => {
  it('should be a function', () => {
    expect(isValidHtml5Id).toBeInstanceOf(Function);
  });

  it('should return true', () => {
    expect(isValidHtml5Id('hello')).toBe(true);
    expect(isValidHtml5Id('abc1')).toBe(true);
    expect(isValidHtml5Id('1abc')).toBe(true);
    expect(isValidHtml5Id(Object('NaN'))).toBe(true);
    expect(isValidHtml5Id('0')).toBe(true);
    expect(isValidHtml5Id('0x')).toBe(true);
    expect(isValidHtml5Id('+0x0')).toBe(true);
    expect(isValidHtml5Id('-0x0')).toBe(true);
    expect(isValidHtml5Id('0xG')).toBe(true);
  });

  it('should return false', () => {
    expect(isValidHtml5Id('a b')).toBe(false);
    expect(isValidHtml5Id(true)).toBe(false);
    expect(isValidHtml5Id(null)).toBe(false);
    expect(isValidHtml5Id(undefined)).toBe(false);
    expect(isValidHtml5Id(1)).toBe(false);
    expect(isValidHtml5Id('')).toBe(false);
  });
});
