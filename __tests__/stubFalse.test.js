import {stubFalse} from '../index';

describe('stubFalse', () => {
  it('should be a function', () => {
    expect(stubFalse).toBeInstanceOf(Function);
  });

  it('should return false', () => {
    const actual = stubFalse();

    expect(actual).toBe(false);
  });
});
