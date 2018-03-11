import {stubFalse} from '../dist/caboodle-x';

describe('stubFalse', () => {
  it('should be a function', () => {
    expect(stubFalse).toBeInstanceOf(Function);
  });

  it('should return false', () => {
    const actual = stubFalse();

    expect(actual).toBe(false);
  });
});
