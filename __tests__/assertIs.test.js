import 'babel-polyfill';
import {assertIs} from '../dist/caboodle-x';

describe('assertIs', () => {
  it('should be a function', () => {
    expect(assertIs).toBeInstanceOf(Function);
  });

  it('should return array', () => {
    const array = [];
    const assertIsArray = assertIs(Array.isArray);

    expect(assertIsArray(array)).toBe(array);
  });

  it('should throw with default message', () => {
    const assertIsArray = assertIs(Array.isArray);

    expect(() => {
      assertIsArray({});
    }).toThrow(/Not a valid value\./);
  });

  it('should throw with custom message', () => {
    const assertIsArray = assertIs(Array.isArray, 'Custom message');

    expect(() => {
      assertIsArray({});
    }).toThrow(/Custom message/);
  });

  it('should throw if not initiated with a function', () => {
    expect(() => {
      assertIs([]);
    }).toThrow(/isFn argument must be a function\./);
  });
});
