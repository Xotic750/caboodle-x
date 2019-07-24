import {requireCoercibleToString} from 'src/caboodle-x';

const hasSymbol = typeof Symbol === 'function' && typeof Symbol('') === 'symbol';

const ifSymbolIt = hasSymbol ? it : xit;

describe('requireCoercibleToString', () => {
  it('is a function', () => {
    expect(typeof requireCoercibleToString).toBe('function');
  });

  it('should throw when target is null or undefined', () => {
    expect(() => {
      requireCoercibleToString();
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      requireCoercibleToString(undefined);
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      requireCoercibleToString(null);
    }).toThrowErrorMatchingSnapshot();
  });

  it('should return a string for everything', () => {
    const values = [true, 'abc', 1, function() {}, [], /r/];

    const expected = values.map(String);
    const actual = values.map(requireCoercibleToString);
    expect(actual).toStrictEqual(expected);
  });

  it('should throw for Object.create(null)', () => {
    expect(() => {
      requireCoercibleToString(Object.create(null));
    }).toThrowErrorMatchingSnapshot();
  });

  ifSymbolIt('should throw for Symbol', () => {
    const sym = Symbol('foo');
    expect(() => {
      requireCoercibleToString(sym);
    }).toThrowErrorMatchingSnapshot();

    const symObj = Object(sym);
    expect(() => {
      requireCoercibleToString(Object(symObj));
    }).toThrowErrorMatchingSnapshot();
  });
});
