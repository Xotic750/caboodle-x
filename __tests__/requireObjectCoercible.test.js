import {requireObjectCoercible} from '../dist/caboodle-x';
import noop from './helpers/noop';

/* istanbul ignore next */
const hasSymbol =
  typeof Symbol === 'function' && typeof Symbol('') === 'symbol';
/* istanbul ignore next */
const ifSymbolIt = hasSymbol ? it : xit;

describe('Basic tests', () => {
  it('should throw TypeError everything', () => {
    expect(() => {
      requireObjectCoercible();
    }).toThrowErrorMatchingSnapshot();
    expect(() => {
      requireObjectCoercible(undefined);
    }).toThrowErrorMatchingSnapshot();
    expect(() => {
      requireObjectCoercible(null);
    }).toThrowErrorMatchingSnapshot();
  });

  it('should return value for everything', () => {
    const values = [true, 'abc', 1, noop, [], /r/];
    const actual = values.map(requireObjectCoercible);
    expect(actual).toEqual(values);
  });

  ifSymbolIt('should return Symbol', () => {
    const sym = Symbol('foo');
    expect(requireObjectCoercible(sym)).toBe(sym);
  });
});
