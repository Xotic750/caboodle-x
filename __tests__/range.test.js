import {range} from '../index';

const falsey = [, null, undefined, false, 0, NaN, ''];

describe('range', () => {
  it('range should infer the sign of "step" when only "end" is given', () => {
    expect(range(4)).toEqual([0, 1, 2, 3]);
    expect(range(-4)).toEqual([0, -1, -2, -3]);
  });

  it('range should infer the sign of "step" when only "start" and "end" are given', () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4]);
    expect(range(5, 1)).toEqual([5, 4, 3, 2]);
  });

  it('range should work with a "start", "end", and "step"', () => {
    expect(range(0, -4, -1)).toEqual([0, -1, -2, -3]);
    expect(range(5, 1, -1)).toEqual([5, 4, 3, 2]);
    expect(range(0, 20, 5)).toEqual([0, 5, 10, 15]);
  });

  it('range should support a "step" of "0"', () => {
    expect(range(1, 4, 0)).toEqual([1, 1, 1]);
  });

  it('range should work with a "step" larger than "end"', () => {
    expect(range(1, 5, 20)).toEqual([1]);
  });

  it('range should work with a negative "step"', () => {
    expect(range(0, -4, -1)).toEqual([0, -1, -2, -3]);
    expect(range(21, 10, -3)).toEqual([21, 18, 15, 12]);
  });

  it('range should support "start" of "-0"', () => {
    const actual = range(-0, 1);
    expect(1 / actual[0]).toBe(-Infinity);
  });

  it('range should treat falsey "start" as "0"', () => {
    falsey.forEach((value, index) => {
      if (index) {
        expect(range(value)).toEqual([]);
        expect(range(value, 1)).toEqual([0]);
      } else {
        expect(range()).toEqual([]);
      }
    });
  });

  it('range should coerce arguments to finite numbers', () => {
    const actual = [
      range('1'),
      range('0', 1),
      range(0, 1, '1'),
      range(NaN),
      range(NaN, NaN),
    ];

    expect(actual).toEqual([[0], [0], [0], [], []]);
  });
});
