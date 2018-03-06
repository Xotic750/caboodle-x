import 'babel-polyfill';
import {isStringType} from '../dist/caboodle-x';

describe('isStringType', () => {
  it('should be a function', () => {
    expect(isStringType).toBeInstanceOf(Function);
  });

  it('should return true', () => {
    expect(isStringType('')).toBe(true);
  });

  it('should return false', () => {
    expect(isStringType(Object('NaN'))).toBe(false);
  });
});
