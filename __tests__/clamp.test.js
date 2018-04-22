import {clamp} from '../index';
import noop from './helpers/noop';

describe('clamp', () => {
  it('should be a function', () => {
    expect(clamp).toBeInstanceOf(Function);
  });

  it('should work Math like with none or a single argument', () => {
    const values = [
      undefined,
      null,
      0,
      '',
      false,
      true,
      1,
      '1',
      [],
      {},
      noop,
      NaN,
      Infinity,
    ];

    const expected = values.map(value => Math.max(0, value));
    const actual = values.map(value => clamp(value));

    expect(Number.isNaN(clamp())).toBe(true);
    expect(actual).toEqual(expected);
  });

  it('should not work Math like with special single argument', () => {
    expect(Object.is(clamp(-0), -0)).toBe(true);
    expect(clamp(-Infinity)).toBe(-Infinity);
  });

  it('should throw RangeError if min > max', () => {
    expect(() => {
      clamp(5, 0, -1);
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      clamp(NaN, 0, -1);
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      clamp(5, -1, -2);
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      clamp(5, 2, 1);
    }).toThrowErrorMatchingSnapshot();
  });

  it('if min === max should return min', () => {
    expect(clamp(-5, 3, 3)).toBe(3);
    expect(clamp(0, 3, 3)).toBe(3);
    expect(clamp(5, 3, 3)).toBe(3);
  });

  it('should work with a `max` argument', () => {
    expect(clamp(5, 3)).toBe(3);
    expect(clamp(1, 3)).toBe(1);
  });

  it('should clamp negative numbers', () => {
    expect(clamp(-10, -5, 5)).toBe(-5);
    expect(clamp(-10.2, -5.5, 5.5)).toBe(-5.5);
    expect(clamp(-Infinity, -5, 5)).toBe(-5);
  });

  it('should clamp positive numbers', () => {
    expect(clamp(10, -5, 5)).toBe(5);
    expect(clamp(10.6, -5.6, 5.4)).toBe(5.4);
    expect(clamp(Infinity, -5, 5)).toBe(5);
  });

  it('should not alter negative numbers in range', () => {
    expect(clamp(-4, -5, 5)).toBe(-4);
    expect(clamp(-5, -5, 5)).toBe(-5);
    expect(clamp(-5.5, -5.6, 5.6)).toBe(-5.5);
  });

  it('should not alter positive numbers in range', () => {
    expect(clamp(4, -5, 5)).toBe(4);
    expect(clamp(5, -5, 5)).toBe(5);
    expect(clamp(4.5, -5.1, 5.2)).toBe(4.5);
  });

  it('should not alter `0` in range', () => {
    expect(1 / clamp(0, -5, 5)).toBe(Infinity);
  });

  it('should clamp to `0`', () => {
    expect(1 / clamp(-10, 0, 5)).toBe(Infinity);
  });

  it('should not alter `-0` in range', () => {
    expect(1 / clamp(-0, -5, 5)).toBe(-Infinity);
  });

  it('should clamp to `-0`', () => {
    expect(1 / clamp(-10, -0, 5)).toBe(-Infinity);
  });

  it('should return `NaN` when `number` is `NaN`', () => {
    expect(Number.isNaN(clamp(NaN, -5, 5))).toBe(true);
  });

  it('should return `NaN` if `min` or `max` are `NaN`', () => {
    expect(clamp(1, -5, NaN)).toBe(NaN);
    expect(clamp(-6, -5, NaN)).toBe(NaN);
    expect(clamp(-1, NaN, 5)).toBe(NaN);
    expect(clamp(6, NaN, 5)).toBe(NaN);
  });

  it('should throw RangeError if `min` > `max`', () => {
    expect(() => {
      clamp(1, 5, -1);
    }).toThrowErrorMatchingSnapshot();
  });
});
