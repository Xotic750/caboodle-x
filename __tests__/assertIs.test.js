import primitives from './helpers/primitives';
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

    primitives.forEach(primitive => {
      expect(() => {
        assertIsArray(primitive);
      }).toThrowErrorMatchingSnapshot();
    });
  });

  it('should throw with custom message', () => {
    const assertIsArray = assertIs(Array.isArray, 'Custom message');

    expect(() => {
      assertIsArray({});
    }).toThrowErrorMatchingSnapshot();
  });

  it('should throw with override message', () => {
    const assertIsArray = assertIs(Array.isArray, 'Custom message');

    expect(() => {
      assertIsArray({}, 'override message');
    }).toThrowErrorMatchingSnapshot();
  });

  it('should throw if not initiated with a function', () => {
    expect(() => {
      assertIs([]);
    }).toThrowErrorMatchingSnapshot();
  });
});
