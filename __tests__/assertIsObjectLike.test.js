import {assertIsObject} from 'src/caboodle-x';
import objects from './helpers/objects';

describe('assertIsObject', () => {
  it('should be a function', () => {
    expect(assertIsObject).toBeInstanceOf(Function);
  });

  it('should return original object', () => {
    const expected = objects;
    const actual = objects.map((object) => assertIsObject(object));

    expect(actual).toStrictEqual(expected);
  });

  it('should throw with default message', () => {
    expect(() => {
      assertIsObject(0);
    }).toThrowErrorMatchingSnapshot();
  });

  it('should throw with custom message', () => {
    expect(() => {
      assertIsObject(true, 'Custom message');
    }).toThrowErrorMatchingSnapshot();
  });
});
