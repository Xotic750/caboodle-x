import 'babel-polyfill';
import primitives from './helpers/primitives';
import {assertIsCallable} from '../dist/caboodle-x';

describe('assertIsCallable', () => {
  it('should be a function', () => {
    expect(assertIsCallable).toBeInstanceOf(Function);
  });

  it('should return function', () => {
    const fn = () => {};
    const actual = assertIsCallable(fn);

    expect(actual).toBe(fn);
  });

  it('should throw with default message', () => {
    primitives.forEach((primitive) => {
      expect(() => {
        assertIsCallable(primitive);
      }).toThrow(/Not callable\./);
    });
  });

  it('should throw with custom message', () => {
    expect(() => {
      assertIsCallable({}, 'Custom message');
    }).toThrow(/Custom message/);
  });
});
