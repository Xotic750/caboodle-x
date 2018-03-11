import 'babel-polyfill';
import objects from './helpers/objects';
import {assertIsObject} from '../dist/caboodle-x';

describe('assertIsObject', () => {
  it('should be a function', () => {
    expect(assertIsObject).toBeInstanceOf(Function);
  });

  it('should return original object', () => {
    const expected = objects;
    const actual = objects.map(object => assertIsObject(object));

    expect(actual).toEqual(expected);
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
