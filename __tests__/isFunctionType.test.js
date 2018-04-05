import primitives from './helpers/primitives';
import {isFunctionType} from '../dist/caboodle-x';

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

    expect(expected).toEqual(actual);
  });
});
