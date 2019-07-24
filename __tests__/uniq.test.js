import {uniq} from 'src/caboodle-x';

describe('uniq', () => {
  it('should be a function', () => {
    expect(uniq).toBeInstanceOf(Function);
  });

  it('should perform an unsorted uniq when used as an iteratee for methods like `map`', () => {
    const array = [[2, 1, 2], [1, 2, 1]];
    const actual = array.map(uniq);
    const expected = [[2, 1], [1, 2]];

    expect(actual).toStrictEqual(expected);
  });
});
