import {stubArray} from '../index';

describe('stubArray', () => {
  it('should be a function', () => {
    expect(stubArray).toBeInstanceOf(Function);
  });

  it('should return a new array', () => {
    const actual = stubArray();

    expect(actual).toBeInstanceOf(Array);
    expect(actual).toStrictEqual([]);
  });
});
