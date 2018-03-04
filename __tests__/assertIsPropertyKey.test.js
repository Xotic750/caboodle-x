import 'babel-polyfill';
import {assertIsPropertyKey} from '../dist/caboodle-x';

describe('assertIsPropertyKey', () => {
  it('should be a function', () => {
    expect(assertIsPropertyKey).toBeInstanceOf(Function);
  });

  it('should return a string', () => {
    const string = 'hello';
    const actual = assertIsPropertyKey(string);

    expect(actual).toBe(string);
  });

  it('should return a number', () => {
    const number = 1;
    const actual = assertIsPropertyKey(number);

    expect(actual).toBe(number);
  });

  it('should throw if array', () => {
    expect(() => {
      assertIsPropertyKey([]);
    }).toThrow(/Not a valid property key\./);
  });
});
