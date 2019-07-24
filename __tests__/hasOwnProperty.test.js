import {hasOwnProperty} from 'src/caboodle-x';

const hasSymbolSupport = typeof Symbol === 'function' && typeof Symbol('') === 'symbol';

const itHasSymbolSupport = hasSymbolSupport ? it : xit;

describe('hasOwnProperty', () => {
  it('throw', () => {
    expect(() => {
      hasOwnProperty();
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      hasOwnProperty(undefined);
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      hasOwnProperty(null);
    }).toThrowErrorMatchingSnapshot();
  });

  it('primitive', () => {
    expect(hasOwnProperty(1)).toBe(false);
    expect(hasOwnProperty(true)).toBe(false);
    expect(hasOwnProperty('')).toBe(false);
  });

  it('has own property', () => {
    const o = {foo: 'bar'};

    expect(hasOwnProperty(o, 'foo')).toBe(true);
  });

  it('does not have own property', () => {
    const o = {foo: 'bar'};
    const fn = function() {};

    expect(hasOwnProperty(o, 'bar')).toBe(false);
    expect(hasOwnProperty(o, 'propertyIsEnumerable')).toBe(false);
    expect(hasOwnProperty(o)).toBe(false);
    expect(hasOwnProperty(o, undefined)).toBe(false);
    expect(hasOwnProperty(o, null)).toBe(false);
    expect(hasOwnProperty(o, 1)).toBe(false);
    expect(hasOwnProperty(o, true)).toBe(false);
    expect(hasOwnProperty(o, fn)).toBe(false);
    expect(hasOwnProperty(o, [])).toBe(false);
    expect(hasOwnProperty(o, {})).toBe(false);
    expect(hasOwnProperty(o, Object('bar'))).toBe(false);
    expect(hasOwnProperty(o, Object(1))).toBe(false);
    expect(hasOwnProperty(o, Object(true))).toBe(false);
  });

  itHasSymbolSupport('symbol', () => {
    const s = Symbol('s');
    const o = {};
    o[s] = 'bar';

    expect(hasOwnProperty(o, s)).toBe(true);
    expect(hasOwnProperty(o, Object(s))).toBe(true);
  });
});
