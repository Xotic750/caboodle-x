import {isBooleanType} from 'src/caboodle-x';

describe('isBooleanType', () => {
  it('should be a function', () => {
    expect(isBooleanType).toBeInstanceOf(Function);
  });

  it('should return true', () => {
    expect(isBooleanType(true)).toBe(true);
    expect(isBooleanType(false)).toBe(true);
  });

  it('should return false', () => {
    expect(isBooleanType(Object(true))).toBe(false);
    expect(isBooleanType(Object(false))).toBe(false);
  });
});
