import {stubString} from 'src/caboodle-x';

describe('stubString', () => {
  it('should be a function', () => {
    expect(stubString).toBeInstanceOf(Function);
  });

  it('should return an empty string', () => {
    const actual = stubString();

    expect(actual).toBe('');
  });
});
