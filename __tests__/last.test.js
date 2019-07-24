import {last} from 'src/caboodle-x';

describe('last', () => {
  it('should return the last element', () => {
    const array = [1, 2, 3, 4];

    expect(last(array)).toBe(4);
  });

  it('should return the last element of a sting', () => {
    const string = 'abcd';

    expect(last(string)).toBe('d');
  });

  it('should return `undefined` when querying empty arrays', () => {
    expect(last([])).toBeUndefined();
  });

  it('should return `` when querying empty strings', () => {
    expect(last('')).toBe('');
  });

  it('should work as an iteratee for methods like `map`', () => {
    const array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const actual = array.map(last);

    expect(actual).toStrictEqual([3, 6, 9]);
  });
});
