import objects from './helpers/objects';
import {assertIsObjectLike} from '../index';

describe('assertIsObjectLike', () => {
  it('should be a function', () => {
    expect(assertIsObjectLike).toBeInstanceOf(Function);
  });

  it('should return original object', () => {
    const expected = objects;
    const actual = objects.map(object => assertIsObjectLike(object));

    expect(actual).toEqual(expected);
  });

  it('should throw with default message', () => {
    expect(() => {
      assertIsObjectLike(0);
    }).toThrowErrorMatchingSnapshot();
  });

  it('should throw with custom message', () => {
    expect(() => {
      assertIsObjectLike(true, 'Custom message');
    }).toThrowErrorMatchingSnapshot();
  });
});
