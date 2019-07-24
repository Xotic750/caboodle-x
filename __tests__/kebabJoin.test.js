import {kebabJoin} from 'src/caboodle-x';

describe('kebabJoin', () => {
  it('should be a function', () => {
    expect(kebabJoin).toBeInstanceOf(Function);
  });

  it('should return a kebabcase string', () => {
    const values = ['hello', 'there', 'world', 'how', 'are', 'you'];
    const expected = 'hello-there-world-how-are-you';

    const actual = kebabJoin(...values);

    expect(actual).toBe(expected);
  });
});
