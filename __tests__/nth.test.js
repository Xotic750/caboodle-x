import {nth} from '../src/caboodle-x';

describe('nth', () => {
  it('should return the nth element', () => {
    const array = [1, 2, 3, 4];

    expect(nth(array, 2)).toBe(3);
  });

  it('should return the nth element of a sting', () => {
    const string = 'abcd';

    expect(nth(string, 2)).toBe('c');
  });

  it('should return `undefined` when querying empty arrays', () => {
    expect(nth([], 2)).toBeUndefined();
  });

  it('should return `` when querying empty strings', () => {
    expect(nth('', 2)).toBe('');
  });
});
