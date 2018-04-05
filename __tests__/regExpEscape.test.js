import {regexpEscape} from '../dist/caboodle-x';

/* istanbul ignore next */
const hasSymbol =
  typeof Symbol === 'function' && typeof Symbol('') === 'symbol';
/* istanbul ignore next */
const ifSymbolIt = hasSymbol ? it : xit;

describe('regexpEscape', () => {
  it('is a function', () => {
    expect(typeof regexpEscape).toBe('function');
  });

  it('should throw when target is null or undefined', () => {
    expect(() => {
      regexpEscape();
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      regexpEscape(undefined);
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      regexpEscape(null);
    }).toThrowErrorMatchingSnapshot();
  });

  it('simple strings', () => {
    const strings = ['The Quick Brown Fox', 'hello there', ''];

    strings.forEach((str) => {
      expect(regexpEscape(str)).toBe(
        str,
        `${JSON.stringify(str)} regexpEscapes to itself.`,
      );
    });
  });

  it('strings that need escaping', () => {
    expect(regexpEscape('hi. how are you?')).toBe('hi\\. how are you\\?');
    const syntaxCharacters = '^$\\.*+?()[]{}|';
    expect(regexpEscape(syntaxCharacters)).toHaveLength(syntaxCharacters.length * 2);
    expect(regexpEscape('\uD834\uDF06.')).toBe('\uD834\uDF06\\.');
  });

  it('non-strings', () => {
    const strings = ['hello there', '^$\\.*+?()[]{}|', '\uD834\uDF06.'];

    strings.forEach((str) => {
      expect(regexpEscape({
        toString() {
          return str;
        },
      })).toBe(regexpEscape(str));
    });
  });

  it('should return a string for everything', () => {
    const values = [true, 'abc', 1, [], /r/];

    const expected = values.map(String);
    const actual = values.map(regexpEscape);
    expect(actual).toEqual(expected);
  });

  it('should throw for Object.create(null)', () => {
    expect(() => {
      regexpEscape(Object.create(null));
    }).toThrowErrorMatchingSnapshot();
  });

  ifSymbolIt('should throw for Symbols', () => {
    const symbol = Symbol('foo');

    expect(() => {
      regexpEscape(symbol);
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      regexpEscape(Object(symbol));
    }).toThrowErrorMatchingSnapshot();
  });
});
