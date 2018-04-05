import {isInteger} from '../dist/caboodle-x';

describe('isInteger', () => {
  it('is a function', () => {
    expect(typeof isInteger).toBe('function');
  });

  it('should return true', () => {
    isInteger(0);
    isInteger(-0);
    isInteger(1);
    isInteger(-100000);
  });

  it('should return false', () => {
    isInteger(0.1);
    isInteger(-0.1);
    isInteger(Math.PI);
    isInteger(NaN);
    isInteger(Infinity);
    isInteger(-Infinity);
    isInteger('10');
    isInteger(true);
    isInteger(false);
    isInteger([1]);
  });
});
