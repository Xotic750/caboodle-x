import 'babel-polyfill';
import {assertIsFunctionType} from '../dist/caboodle-x';

describe('assertIsFunctionType', () => {
  it('should be a function', () => {
    expect(assertIsFunctionType).toBeInstanceOf(Function);
  });

  it('should return a function', () => {
    const fn = () => {};
    const actual = assertIsFunctionType(fn);

    expect(actual).toBe(fn);
  });

  it('should throw if array', () => {
    expect(() => {
      assertIsFunctionType([]);
    }).toThrow(/Not a function\./);
  });
});
