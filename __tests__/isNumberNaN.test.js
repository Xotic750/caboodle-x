import {isNumberNaN} from '../dist/caboodle-x';

/* istanbul ignore next */
const itHasWindow = typeof window === 'undefined' ? xit : it;
/* istanbul ignore next */
const noop = () => {};

describe('isNumberNaN', () => {
  it('is a function', () => {
    expect(typeof isNumberNaN).toBe('function');
  });

  it('primitives', () => {
    expect(isNumberNaN()).toBe(false, 'undefined is not NaN');
    expect(isNumberNaN(null)).toBe(false, 'null is not NaN');
    expect(isNumberNaN(false)).toBe(false, 'false is not NaN');
    expect(isNumberNaN(true)).toBe(false, 'true is not NaN');
    expect(isNumberNaN(0)).toBe(false, 'positive zero is not NaN');
    expect(isNumberNaN(Infinity)).toBe(false, 'Infinity is not NaN');
    expect(isNumberNaN(-Infinity)).toBe(false, '-Infinity is not NaN');
    expect(isNumberNaN('foo')).toBe(false, 'string is not NaN');
    expect(isNumberNaN('NaN')).toBe(false, 'string NaN is not NaN');
  });

  it('objects', () => {
    expect(isNumberNaN([])).toBe(false, 'array is not NaN');
    expect(isNumberNaN({})).toBe(false, 'object is not NaN');
    expect(isNumberNaN(noop)).toBe(false, 'function is not NaN');
  });

  it('valueOf', () => {
    /* istanbul ignore next */
    const obj = {
      valueOf() {
        return NaN;
      },
    };

    expect(isNumberNaN(Number(obj))).toBe(
      true,
      'object with valueOf of NaN, converted to Number, is NaN',
    );
    expect(isNumberNaN(obj)).toBe(
      false,
      'object with valueOf of NaN is not NaN',
    );
  });

  it('NaN', () => {
    expect(isNumberNaN(NaN)).toBe(true, 'NaN is NaN');
  });

  itHasWindow('Work with window', () => {
    expect(isNumberNaN(window)).toBe(false, 'window is not NaN');
  });
});
