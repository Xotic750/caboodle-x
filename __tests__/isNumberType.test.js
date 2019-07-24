import {isNumberType} from 'src/caboodle-x';

describe('isNumberType', () => {
  it('should be a function', () => {
    expect(isNumberType).toBeInstanceOf(Function);
  });

  it('should return true', () => {
    expect(isNumberType(NaN)).toBe(true);
    expect(isNumberType(1)).toBe(true);
  });

  it('should return false', () => {
    expect(isNumberType(Object(NaN))).toBe(false);
    expect(isNumberType(Object(1))).toBe(false);
  });
});
