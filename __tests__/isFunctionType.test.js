import {isFunctionType} from 'src/caboodle-x';
import primitives from './helpers/primitives';

describe('isFunctionType', () => {
  it('should be a function', () => {
    expect(isFunctionType).toBeInstanceOf(Function);
  });

  it('should return true', () => {
    expect(isFunctionType(isFunctionType)).toBe(true);
  });

  it('should return false', () => {
    const expected = primitives.map(() => false);
    const actual = primitives.map(isFunctionType);

    expect(expected).toStrictEqual(actual);
  });
});
