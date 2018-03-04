import 'babel-polyfill';
import {assertIsObjectLikeNotArray} from '../dist/caboodle-x';

describe('assertIsObjectLikeNotArray', () => {
  it('should be a function', () => {
    expect(assertIsObjectLikeNotArray).toBeInstanceOf(Function);
  });

  it('should return object', () => {
    const object = {};
    const actual = assertIsObjectLikeNotArray(object);

    expect(actual).toBe(object);
  });

  it('should throw if array', () => {
    expect(() => {
      assertIsObjectLikeNotArray([]);
    }).toThrow(/Not a valid object\./);
  });
});
