import {isUniq} from '../index';

describe('isUniq', () => {
  it('should be a function', () => {
    expect(isUniq).toBeInstanceOf(Function);
  });

  it('should return false', () => {
    const array = [[2, 1, 2], [1, 2, 1]];
    const actual = array.map(isUniq);
    const expected = [false, false];

    expect(actual).toEqual(expected);
  });

  it('should return true', () => {
    const array = [[2, 1], [1, 2]];
    const actual = array.map(isUniq);
    const expected = [true, true];

    expect(actual).toEqual(expected);
  });
});
