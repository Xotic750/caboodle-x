import {head} from '../dist/caboodle-x';

describe('head', () => {
  it('should return the first element', () => {
    const array = [1, 2, 3, 4];

    expect(head(array)).toBe(1);
  });

  it('should return the first element of a sting', () => {
    const string = 'abcd';

    expect(head(string)).toBe('a');
  });

  it('should return `undefined` when querying empty arrays', () => {
    expect(head([])).toBe(undefined);
  });

  it('should return `` when querying empty strings', () => {
    expect(head('')).toBe('');
  });

  it('should work as an iteratee for methods like map`', () => {
    const array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const actual = array.map(head);

    expect(actual).toEqual([1, 4, 7]);
  });
});
