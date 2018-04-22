import '@babel/polyfill';
import {intToRGB} from '../index';

describe('intToRGB', () => {
  it('is a function', () => {
    expect(typeof intToRGB).toBe('function');
  });

  it('non-numbers', () => {
    const nonNumbers = [
      undefined,
      null,
      '',
      false,
      '1',
      true,
      {},
      [],
      function() {},
    ];

    const expected = nonNumbers.map(
      item =>
        `#${(Number(item) || 0)
          .toString(16)
          .padStart(6, '0')
          .toUpperCase()}`,
    );

    const actual = nonNumbers.map(item => intToRGB(item));

    expect(actual).toEqual(expected);
  });

  it('-1 to be "#FFFFFF"', () => {
    expect(intToRGB(-1)).toBe('#FFFFFF');
  });

  it('0 to be "#000000"', () => {
    expect(intToRGB(0)).toBe('#000000');
  });

  it('1 to be "#000001"', () => {
    expect(intToRGB(1)).toBe('#000001');
  });

  it('16777214 to be "#FFFFFE"', () => {
    expect(intToRGB(16777214)).toBe('#FFFFFE');
  });

  it('16777215 to be "#FFFFFF"', () => {
    expect(intToRGB(16777215)).toBe('#FFFFFF');
  });

  it('16777216 to be "#000000"', () => {
    expect(intToRGB(16777216)).toBe('#000000');
  });

  it('16777216 to be "#000001"', () => {
    expect(intToRGB(16777217)).toBe('#000001');
  });

  it('NaN to be "#000000"', () => {
    expect(intToRGB(NaN)).toBe('#000000');
  });

  it('Infinity to be "#000000"', () => {
    expect(intToRGB(Infinity)).toBe('#000000');
  });

  it('-Infinity to be "#000000"', () => {
    expect(intToRGB(-Infinity)).toBe('#000000');
  });
});
