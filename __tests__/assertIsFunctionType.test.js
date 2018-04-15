import primitives from './helpers/primitives';
import {assertIsFunction} from '../dist/caboodle-x';
import noop from './helpers/noop';

describe('assertIsFunction', () => {
  it('should be a function', () => {
    expect(assertIsFunction).toBeInstanceOf(Function);
  });

  it('should return function', () => {
    const actual = assertIsFunction(noop);

    expect(actual).toBe(noop);
  });

  it('should throw with default message', () => {
    primitives.forEach(primitive => {
      expect(() => {
        assertIsFunction(primitive);
      }).toThrowErrorMatchingSnapshot();
    });
  });

  it('should throw with custom message', () => {
    expect(() => {
      assertIsFunction({}, 'Custom message');
    }).toThrowErrorMatchingSnapshot();
  });
});
