import {toPropertyKey} from '../dist/caboodle-x';

/* istanbul ignore next */
const hasSymbols =
  typeof Symbol === 'function' && typeof Symbol('') === 'symbol';

/* istanbul ignore next */
const coercibleObject = {
  toString() {
    return 42;
  },
  valueOf() {
    return 3;
  },
};

/* istanbul ignore next */
const valueOfOnlyObject = {
  toString() {
    return {};
  },
  valueOf() {
    return 4;
  },
};

/* istanbul ignore next */
const toStringOnlyObject = {
  toString() {
    return 7;
  },
  valueOf() {
    return {};
  },
};

const objects = [{}, coercibleObject, toStringOnlyObject, valueOfOnlyObject];

/* istanbul ignore next */
const symbols = hasSymbols ? [Symbol.iterator, Symbol('foo')] : [];
const objectSymbols = symbols.map(Object);

const numbers = [0, -0, Infinity, -Infinity, 42];
const strings = ['', 'foo'];
const booleans = [true, false];

const nullPrimitives = [undefined, null];
const nonSymbolPrimitives = [].concat(
  nullPrimitives,
  booleans,
  strings,
  numbers,
);

describe('toPropertyKey', () => {
  it('is a function', () => {
    expect(typeof toPropertyKey).toBe('function');
  });

  it('should return the matching value', () => {
    objects.concat(nonSymbolPrimitives).forEach(value => {
      expect(toPropertyKey(value)).toBe(String(value));
    });

    symbols.forEach(symbol => {
      expect(toPropertyKey(symbol)).toBe(symbol);
    });

    objectSymbols.forEach((objectSymbol, index) => {
      expect(toPropertyKey(objectSymbol)).toBe(symbols[index]);
    });
  });

  it('should throw if not coercible', () => {
    expect(() => {
      toPropertyKey(Object.create(null));
    }).toThrowErrorMatchingSnapshot();
  });
});
