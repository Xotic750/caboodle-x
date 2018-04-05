import {toString} from '../dist/caboodle-x';
import values from './helpers/nonSymbols';

/* istanbul ignore next */
const hasSymbol =
  typeof Symbol === 'function' && typeof Symbol('') === 'symbol';
/* istanbul ignore next */
const ifSymbolIt = hasSymbol ? it : xit;

describe('Basic tests', () => {
  it('should return a string for everything', () => {
    const expected = values.map(String);
    const actual = values.map(toString);
    expect(actual).toEqual(expected);
  });

  it('should throw for Object.create(null)', () => {
    expect(() => {
      toString(Object.create(null));
    }).toThrowErrorMatchingSnapshot();
  });

  ifSymbolIt('should throw for Symbol', () => {
    const sym = Symbol('foo');
    expect(() => {
      toString(sym);
    }).toThrowErrorMatchingSnapshot();

    const symObj = Object(sym);
    expect(() => {
      toString(Object(symObj));
    }).toThrowErrorMatchingSnapshot();
  });
});
