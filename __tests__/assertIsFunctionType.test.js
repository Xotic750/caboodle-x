import 'babel-polyfill';
import primitives from './helpers/primitives';
import {assertIsFunctionType} from '../dist/caboodle-x';

describe('assertIsFunctionType', () => {
  it('should be a function', () => {
    expect(assertIsFunctionType).toBeInstanceOf(Function);
  });

  it('should return function', () => {
    const fn = () => {};
    const actual = assertIsFunctionType(fn);

    expect(actual).toBe(fn);
  });

  it('should throw with default message', () => {
    primitives.forEach((primitive) => {
      expect(() => {
        assertIsFunctionType(primitive);
      }).toThrowErrorMatchingSnapshot();
    });
  });

  it('should throw with custom message', () => {
    expect(() => {
      assertIsFunctionType({}, 'Custom message');
    }).toThrowErrorMatchingSnapshot();
  });
});
