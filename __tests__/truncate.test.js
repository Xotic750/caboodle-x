import {truncate} from '../index';

describe('truncate', () => {
  const testString = 'hi-diddly-ho there, neighborino';

  it('is a function', () => {
    expect(typeof truncate).toBe('function');
  });

  it('no arguments', () => {
    const actual = truncate();
    const expected = 'undefined';
    expect(actual).toBe(expected);
  });

  it('non-strings', () => {
    const actual = truncate(null);
    const expected = 'null';
    expect(actual).toBe(expected);
  });

  it('default action', () => {
    const actual = truncate(testString);
    const expected = 'hi-diddly-ho there, neighbo...';
    expect(actual).toBe(expected);
  });

  it('with length and seperator string', () => {
    const actual = truncate(testString, {
      length: 24,
      separator: ' ',
    });
    const expected = 'hi-diddly-ho there,...';
    expect(actual).toBe(expected);
  });

  it('with length and seperator regex', () => {
    const actual = truncate(testString, {
      length: 24,
      separator: /,? +/,
    });
    const expected = 'hi-diddly-ho there...';
    expect(actual).toBe(expected);
  });

  it('with omission', () => {
    const actual = truncate(testString, {omission: ' [...]'});
    const expected = 'hi-diddly-ho there, neig [...]';
    expect(actual).toBe(expected);
  });
});
