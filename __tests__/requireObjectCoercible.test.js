import {requireObjectCoercible} from '../dist/caboodle-x';

const hasSymbol = typeof Symbol === 'function' && typeof Symbol('') === 'symbol';
const ifSymbolIt = hasSymbol ? it : xit;

describe('Basic tests', () => {
  it('should throw TypeError everything', () => {
    expect(() => {
      requireObjectCoercible();
    }).toThrow();
    expect(() => {
      requireObjectCoercible(undefined);
    }).toThrow();
    expect(() => {
      requireObjectCoercible(null);
    }).toThrow();
  });

  it('should return value for everything', () => {
    const values = [
      true,
      'abc',
      1,
      function () {},
      [],
      /r/,
    ];
    const actual = values.map(requireObjectCoercible);
    expect(actual).toEqual(values);
  });

  ifSymbolIt('should return Symbol', () => {
    const sym = Symbol('foo');
    expect(requireObjectCoercible(sym)).toBe(sym);
  });
});
