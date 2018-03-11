import {identity} from '../dist/caboodle-x';

describe('identity', () => {
  const array = Object.freeze([1, 2, 3, 4]);

  it('should be a function', () => {
    expect(identity).toBeInstanceOf(Function);
  });

  it('should return the first argument only', () => {
    expect(identity(array)).toBe(array);
    expect(identity(...array)).toBe(1);
  });
});
