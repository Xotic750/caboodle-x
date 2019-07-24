import {assertIsObjectLike, assertIsObject} from 'src/caboodle-x';
import objects from './helpers/objects';

describe('assertIsObjectLike', () => {
  it('should be a function', () => {
    expect(assertIsObjectLike).toBeInstanceOf(Function);
  });

  it('should return original object', () => {
    const expected = objects;

    const actual = objects.map((object) => assertIsObject(object));

    expect(actual).toStrictEqual(expected);
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
