import {trunc} from '../index';
import isPositiveZero from './helpers/isPositiveZero';
import isNegativeZero from './helpers/isNegativeZero';

const valueOfIsNaN = {
  valueOf() {
    return NaN;
  },
};

const valueOfIsInfinity = {
  valueOf() {
    return Infinity;
  },
};

describe('trunc', () => {
  it('has the right arity', () => {
    expect(trunc).toHaveLength(1);
  });

  it('should be correct', () => {
    expect(Number.isNaN(trunc(NaN))).toBe(true);
    expect(isNegativeZero(trunc(-0))).toBe(true);
    expect(isPositiveZero(trunc(+0))).toBe(true);
    expect(trunc(Infinity)).toBe(Infinity);
    expect(trunc(-Infinity)).toBe(-Infinity);
    expect(trunc(1.01)).toBe(1);
    expect(trunc(1.99)).toBe(1);
    expect(trunc(-555.555)).toBe(-555);
    expect(trunc(-1.99)).toBe(-1);
  });

  it('should coerce to a number immediately', () => {
    expect(trunc(valueOfIsInfinity)).toBe(Infinity);
    expect(Number.isNaN(trunc(valueOfIsNaN))).toBe(true);
  });
});
