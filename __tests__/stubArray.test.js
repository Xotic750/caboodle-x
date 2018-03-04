import 'babel-polyfill';
import {stubArray} from '../dist/caboodle-x';

describe('stubArray', () => {
  it('should be a function', () => {
    expect(stubArray).toBeInstanceOf(Function);
  });

  it('should return a new array', () => {
    const actual = stubArray();

    expect(actual).toBeInstanceOf(Array);
    expect(actual).toEqual([]);
  });
});
