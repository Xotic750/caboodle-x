import {modulo} from 'src/caboodle-x';

describe('modulo', () => {
  it('is a function', () => {
    expect(typeof modulo).toBe('function');
  });

  it('a should be 1', () => {
    expect(modulo(1, 0x1000000)).toBe(1);
  });

  it('-1 is the maximum value', () => {
    expect(modulo(-1, 0x1000000)).toBe(16777215);
  });
});
