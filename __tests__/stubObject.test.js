import 'babel-polyfill';
import {stubObject} from '../dist/caboodle-x';

describe('stubObject', () => {
  it('should be a function', () => {
    expect(stubObject).toBeInstanceOf(Function);
  });

  it('should return a new object', () => {
    const actual = stubObject();

    expect(actual).toBeInstanceOf(Object);
    expect(actual).toEqual({});
  });
});
