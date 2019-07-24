import {toObject} from 'src/caboodle-x';
import noop from './helpers/noop';

const hasSymbol = typeof Symbol === 'function' && typeof Symbol('') === 'symbol';
const ifSymbolIt = hasSymbol ? it : xit;

describe('toObject', () => {
  it('should throw TypeError', () => {
    expect(() => {
      toObject();
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      toObject(undefined);
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      toObject(null);
    }).toThrowErrorMatchingSnapshot();
  });

  it('should be correct type in each case', () => {
    expect(typeof toObject(1)).toBe('object');
    expect(typeof toObject(true)).toBe('object');
    expect(typeof toObject('')).toBe('object');
    expect(typeof toObject([])).toBe('object');
    expect(typeof toObject({})).toBe('object');
    expect(typeof toObject(Object('a'))).toBe('object');
    expect(typeof toObject(noop)).toBe('function');
    expect(typeof toObject(new Date())).toBe('object');
  });

  it('should have correct values', () => {
    const str = toObject('foo');
    expect(typeof str).toBe('object');
    expect(str).toHaveLength(3);
    expect(Object.prototype.toString.call(str)).toBe('[object String]');
    expect(str.toString()).toBe('foo');
    expect(str.charAt(0)).toBe('f');
    expect(str.charAt(1)).toBe('o');
    expect(str.charAt(2)).toBe('o');
  });

  it('should be same object', () => {
    let testObject = [];
    expect(toObject(testObject)).toBe(testObject);
    testObject = {};
    expect(toObject(testObject)).toBe(testObject);
    testObject = function() {};

    expect(toObject(testObject)).toBe(testObject);
    testObject = Object('test');
    expect(toObject(testObject)).toBe(testObject);
    testObject = Object(true);
    expect(toObject(testObject)).toBe(testObject);
    testObject = Object(10);
    expect(toObject(testObject)).toBe(testObject);
  });

  ifSymbolIt('should return Symbol', () => {
    const sym = Symbol('foo');
    expect(toObject(sym)).toStrictEqual(Object(sym));
  });
});
