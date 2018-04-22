import {rangeRight} from '../index';

const falsey = [, null, undefined, false, 0, NaN, ''];

describe('rangeRight', () => {
  it('rangeRight should infer the sign of "step" when only "end" is given', () => {
    expect(rangeRight(4)).toEqual([3, 2, 1, 0]);
    expect(rangeRight(-4)).toEqual([-3, -2, -1, 0]);
  });

  it('rangeRight should infer the sign of "step" when only "start" and "end" are given', () => {
    expect(rangeRight(1, 5)).toEqual([4, 3, 2, 1]);
    expect(rangeRight(5, 1)).toEqual([2, 3, 4, 5]);
  });

  it('rangeRight should work with a "start", "end", and "step"', () => {
    expect(rangeRight(0, -4, -1)).toEqual([-3, -2, -1, 0]);
    expect(rangeRight(5, 1, -1)).toEqual([2, 3, 4, 5]);
    expect(rangeRight(0, 20, 5)).toEqual([15, 10, 5, 0]);
  });

  it('rangeRight should support a "step" of "0"', () => {
    expect(rangeRight(1, 4, 0)).toEqual([1, 1, 1]);
  });

  it('rangeRight should work with a "step" larger than "end"', () => {
    expect(rangeRight(1, 5, 20)).toEqual([1]);
  });

  it('rangeRight should work with a negative "step"', () => {
    expect(rangeRight(0, -4, -1)).toEqual([-3, -2, -1, 0]);
    expect(rangeRight(21, 10, -3)).toEqual([12, 15, 18, 21]);
  });

  it('rangeRight should support "start" of "-0"', () => {
    const actual = rangeRight(-0, 1);
    expect(1 / actual[0]).toBe(-Infinity);
  });

  it('rangeRight should treat falsey "start" as "0"', () => {
    falsey.forEach((value, index) => {
      if (index) {
        expect(rangeRight(value)).toEqual([]);
        expect(rangeRight(value, 1)).toEqual([0]);
      } else {
        expect(rangeRight()).toEqual([]);
      }
    });
  });

  it('rangeRight should coerce arguments to finite numbers', () => {
    const actual = [
      rangeRight('1'),
      rangeRight('0', 1),
      rangeRight(0, 1, '1'),
      rangeRight(NaN),
      rangeRight(NaN, NaN),
    ];

    expect(actual).toEqual([[0], [0], [0], [], []]);
  });
});
