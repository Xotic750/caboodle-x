import {isUnderscored} from '../index';

describe('isUnderscored', () => {
  it('not underscored', () => {
    expect(isUnderscored()).toBe(false, 'undefined is not underscored');
    expect(isUnderscored(null)).toBe(false, 'null is not underscored');
    expect(isUnderscored(false)).toBe(false, 'false is not underscored');
    expect(isUnderscored(true)).toBe(false, 'true is not underscored');
    expect(isUnderscored(42)).toBe(false, 'number is not underscored');
    expect(isUnderscored('foo')).toBe(false, 'string is not underscored');
    expect(isUnderscored([])).toBe(false, 'array is not underscored');
    expect(isUnderscored({})).toBe(false, 'object is not underscored');
    expect(isUnderscored(() => {})).toBe(false, 'function is not underscored');
    expect(isUnderscored(/a/g)).toBe(false, 'regex literal is not underscored');
  });

  it('underscored', () => {
    expect(isUnderscored('_')).toBe(true, 'only underscore');
    expect(isUnderscored('_dsad')).toBe(true, 'underscored start');
    expect(isUnderscored('dsad_')).toBe(true, 'underscored end');
    expect(isUnderscored('ds_ad')).toBe(true, 'underscored middle');
  });
});
