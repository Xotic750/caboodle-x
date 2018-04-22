import {isPopulatedString} from '../index';

describe('isPopulatedString', () => {
  it('not populated', () => {
    expect(isPopulatedString()).toBe(false, 'undefined is not populated');
    expect(isPopulatedString(null)).toBe(false, 'null is not populated');
    expect(isPopulatedString(false)).toBe(false, 'false is not populated');
    expect(isPopulatedString(true)).toBe(false, 'true is not populated');
    expect(isPopulatedString(42)).toBe(false, 'number is not populated');
    expect(isPopulatedString('')).toBe(false, 'string is not populated');
    expect(isPopulatedString(' ')).toBe(false, 'string is not populated');
    expect(isPopulatedString([])).toBe(false, 'array is not populated');
    expect(isPopulatedString({})).toBe(false, 'object is not populated');
    expect(isPopulatedString(() => {})).toBe(
      false,
      'function is not populated',
    );
    expect(isPopulatedString(/a/g)).toBe(
      false,
      'regex literal is not populated',
    );
  });

  it('populated', () => {
    expect(isPopulatedString('-')).toBe(true, 'only dash');
    expect(isPopulatedString('-dsad')).toBe(true, 'populated start');
    expect(isPopulatedString('dsad-')).toBe(true, 'populated end');
    expect(isPopulatedString('ds-ad')).toBe(true, 'populated middle');
  });
});
