import {castArray} from '../src/caboodle-x';
import falsey from './helpers/falsey';

describe('castArray', () => {
  it('should wrap non-array items in an array', () => {
    const values = falsey.concat(true, 1, 'a', {a: 1});
    const expected = values.map((value) => [value]);
    const actual = values.map(castArray);

    expect(actual).toStrictEqual(expected);
  });

  it('should return array values by reference', () => {
    const array = [1];

    expect(castArray(array)).toBe(array);
  });

  it('should return an empty array when no arguments are given', () => {
    expect(castArray()).toStrictEqual([]);
  });
});
