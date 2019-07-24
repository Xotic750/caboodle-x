import {truncate} from 'src/caboodle-x';

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

  it('default action with complex symbols', () => {
    const actual = truncate(`\uD87E\uDC04 ${testString}`);
    const expected = '\uD87E\uDC04 hi-diddly-ho there, neigh...';
    expect(actual).toBe(expected);
  });

  it('with length and no seperator string', () => {
    const actual = truncate(testString, {
      length: 24,
    });
    const expected = 'hi-diddly-ho there, n...';
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

  it('small string with omission', () => {
    const actual = truncate('hello', {omission: ' [...]'});
    const expected = 'hello';
    expect(actual).toBe(expected);
  });

  it('small string with length and omission', () => {
    const actual = truncate('hello', {
      length: 4,
      omission: ' [...]',
    });
    const expected = ' [...]';
    expect(actual).toBe(expected);
  });

  it('with complex symbol omission', () => {
    const actual = truncate(testString, {omission: ' [\uD87E\uDC04]'});
    const expected = 'hi-diddly-ho there, neighb [\uD87E\uDC04]';
    expect(actual).toBe(expected);
  });
});
