import {includes} from 'src/caboodle-x';

describe('includes', () => {
  const array = Object.freeze([1, 2, 3, 4]);

  it('should be a function', () => {
    expect(includes).toBeInstanceOf(Function);
  });

  it('should return true', () => {
    expect(includes(array, 3)).toBe(true);
  });

  it('should return false', () => {
    expect(includes(array, 6)).toBe(false);
  });
});
