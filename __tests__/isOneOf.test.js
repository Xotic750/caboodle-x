import 'babel-polyfill';
import {isOneOf} from '../dist/caboodle-x';

describe('isOneOf', () => {
  const array = Object.freeze([1, 2, 3, 4]);

  it('should be a function', () => {
    expect(isOneOf).toBeInstanceOf(Function);
  });

  it('should return true', () => {
    expect(isOneOf(3, array)).toBe(true);
  });

  it('should return false', () => {
    expect(isOneOf(6, array)).toBe(false);
  });
});
