import {getAt} from '../dist/caboodle-x';

describe('getAt', () => {
  it('should return the getAt element', () => {
    const array = [1, 2, 3, 4];

    expect(getAt(array, 2)).toBe(3);
  });

  it('should return the getAt element of a sting', () => {
    const string = 'abcd';

    expect(getAt(string, 2)).toBe('c');
  });

  it('should return `undefined` when querying empty arrays', () => {
    expect(getAt([], 2)).toBe(undefined);
  });

  it('should return `` when querying empty strings', () => {
    expect(getAt('', 2)).toBe('');
  });
});
