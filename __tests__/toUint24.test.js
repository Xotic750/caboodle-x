import {toUint24} from 'src/caboodle-x';

describe('toUint24', () => {
  it('is a function', () => {
    expect(typeof toUint24).toBe('function');
  });

  it('0 should be 0', () => {
    expect(toUint24(0)).toBe(0);
  });

  it('1 should be 1', () => {
    expect(toUint24(1)).toBe(1);
  });

  it('-1 is the maximum value 16777215', () => {
    expect(toUint24(-1)).toBe(16777215);
  });

  it('naN should be 0', () => {
    expect(toUint24(NaN)).toBe(0);
  });

  it('infinity should be 0', () => {
    expect(toUint24(Infinity)).toBe(0);
  });

  it('-Infinity should be 0', () => {
    expect(toUint24(-Infinity)).toBe(0);
  });
});
