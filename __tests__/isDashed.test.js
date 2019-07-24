import {isDashed} from '../src/caboodle-x';

describe('isDashed', () => {
  it('not dashed', () => {
    expect(isDashed()).toBe(false, 'undefined is not dashed');
    expect(isDashed(null)).toBe(false, 'null is not dashed');
    expect(isDashed(false)).toBe(false, 'false is not dashed');
    expect(isDashed(true)).toBe(false, 'true is not dashed');
    expect(isDashed(42)).toBe(false, 'number is not dashed');
    expect(isDashed('foo')).toBe(false, 'string is not dashed');
    expect(isDashed([])).toBe(false, 'array is not dashed');
    expect(isDashed({})).toBe(false, 'object is not dashed');
    expect(isDashed(() => {})).toBe(false, 'function is not dashed');
    expect(isDashed(/a/g)).toBe(false, 'regex literal is not dashed');
  });

  it('dashed', () => {
    expect(isDashed('-')).toBe(true, 'only dash');
    expect(isDashed('-dsad')).toBe(true, 'dashed start');
    expect(isDashed('dsad-')).toBe(true, 'dashed end');
    expect(isDashed('ds-ad')).toBe(true, 'dashed middle');
  });
});
