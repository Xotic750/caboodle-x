import {rangeRight} from '../src/caboodle-x';

const falsey = [, null, undefined, false, 0, NaN, ''];

describe('rangeRight', () => {
  it('rangeRight should infer the sign of "step" when only "end" is given', () => {
    expect(rangeRight(4)).toStrictEqual([3, 2, 1, 0]);
    expect(rangeRight(-4)).toStrictEqual([-3, -2, -1, 0]);
  });

  it('rangeRight should infer the sign of "step" when only "start" and "end" are given', () => {
    expect(rangeRight(1, 5)).toStrictEqual([4, 3, 2, 1]);
    expect(rangeRight(5, 1)).toStrictEqual([2, 3, 4, 5]);
  });

  it('rangeRight should work with a "start", "end", and "step"', () => {
    expect(rangeRight(0, -4, -1)).toStrictEqual([-3, -2, -1, 0]);
    expect(rangeRight(5, 1, -1)).toStrictEqual([2, 3, 4, 5]);
    expect(rangeRight(0, 20, 5)).toStrictEqual([15, 10, 5, 0]);
  });

  it('rangeRight should support a "step" of "0"', () => {
    expect(rangeRight(1, 4, 0)).toStrictEqual([1, 1, 1]);
  });

  it('rangeRight should work with a "step" larger than "end"', () => {
    expect(rangeRight(1, 5, 20)).toStrictEqual([1]);
  });

  it('rangeRight should work with a negative "step"', () => {
    expect(rangeRight(0, -4, -1)).toStrictEqual([-3, -2, -1, 0]);
    expect(rangeRight(21, 10, -3)).toStrictEqual([12, 15, 18, 21]);
  });

  it('rangeRight should support "start" of "-0"', () => {
    const actual = rangeRight(-0, 1);
    expect(1 / actual[0]).toBe(-Infinity);
  });

  it('rangeRight should treat falsey "start" as "0"', () => {
    falsey.forEach((value, index) => {
      if (index) {
        expect(rangeRight(value)).toStrictEqual([]);
        expect(rangeRight(value, 1)).toStrictEqual([0]);
      } else {
        expect(rangeRight()).toStrictEqual([]);
      }
    });
  });

  it('rangeRight should coerce arguments to finite numbers', () => {
    const actual = [rangeRight('1'), rangeRight('0', 1), rangeRight(0, 1, '1'), rangeRight(NaN), rangeRight(NaN, NaN)];

    expect(actual).toStrictEqual([[0], [0], [0], [], []]);
  });
});
