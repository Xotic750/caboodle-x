import {assign} from '../dist/caboodle-x';

/* istanbul ignore next */
const hasSymbols =
  typeof Symbol === 'function' && typeof Symbol('') === 'symbol';
/* istanbul ignore next */
const ifSymbolsIt = hasSymbols ? it : xit;

describe('assign', () => {
  it('is a function', () => {
    expect(typeof assign).toBe('function');
  });

  it('should throw when target is null or undefined', () => {
    expect(() => {
      assign();
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      assign(undefined);
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      assign(null);
    }).toThrowErrorMatchingSnapshot();
  });

  it('returns the modified target object', () => {
    const target = {};
    const returned = assign(target, {a: 1});
    expect(returned).toEqual(target);
  });

  it('should merge two objects', () => {
    const target = {a: 1};
    const returned = assign(target, {b: 2});
    expect(returned).toEqual({a: 1, b: 2});
  });

  it('should merge three objects', () => {
    const target = {a: 1};
    const source1 = {b: 2};
    const source2 = {c: 3};
    const returned = assign(target, source1, source2);
    expect(returned).toEqual({
      a: 1,
      b: 2,
      c: 3,
    });
  });

  it('only iterates over own keys', () => {
    const Foo = function() {};
    Foo.prototype.bar = true;
    const foo = new Foo();
    foo.baz = true;
    const target = {a: 1};
    const returned = assign(target, foo);
    expect(returned).toEqual(target);
    expect(target).toEqual({a: 1, baz: true});
  });

  it('coerces lone target to an object', () => {
    const result = {
      bool: assign(true),
      number: assign(1),
      string: assign('1'),
    };

    expect(typeof result.bool).toEqual('object');
    expect(Boolean.prototype.valueOf.call(result.bool)).toBe(true);

    expect(typeof result.number).toEqual('object');
    expect(Number.prototype.valueOf.call(result.number)).toBe(1);

    expect(typeof result.string).toEqual('object');
    expect(String.prototype.valueOf.call(result.string)).toBe('1');
  });

  it('coerces target to an object, assigns from sources', () => {
    const sourceA = {a: 1};
    const sourceB = {b: 1};

    const result = {
      bool: assign(true, sourceA, sourceB),
      number: assign(1, sourceA, sourceB),
      string: assign('1', sourceA, sourceB),
    };

    const bool = Object(true);
    bool.a = 1;
    bool.b = 1;

    expect(typeof result.bool).toBe('object');
    expect(Boolean.prototype.valueOf.call(result.bool)).toBe(true);
    expect(result.bool).toEqual(bool);

    expect(typeof result.number).toBe('object');
    expect(Number.prototype.valueOf.call(result.number)).toBe(1);

    expect(typeof result.string).toBe('object');
    expect(String.prototype.valueOf.call(result.string)).toBe('1');
    const compare = Object.keys(result.string).reduce((acc, key) => {
      acc[key] = /\d+/.test(key)
        ? result.string.charAt(key)
        : result.string[key];
      return acc;
    }, {});

    expect(compare).toEqual({
      0: '1',
      a: 1,
      b: 1,
    });
  });

  it('ignores non-object sources', () => {
    expect(assign({a: 1}, null, {b: 2})).toEqual({a: 1, b: 2});
    expect(assign({a: 1}, undefined, {b: 2})).toEqual({a: 1, b: 2});
    expect(assign({a: 1}, {b: 2}, null)).toEqual({a: 1, b: 2});
  });

  it('does not have pending exceptions', () => {
    // Firefox 37 still has "pending exception" logic in its assign implementation,
    // which is 72% slower than our shim, and Firefox 40's native implementation.
    const thrower = {
      1: 2,
      2: 3,
      3: 4,
    };

    const expected = {
      1: 2,
      2: 3,
      3: 4,
    };

    Object.preventExtensions(thrower);
    Object.preventExtensions(expected);
    expect(thrower).toEqual(expected);

    let error;
    try {
      assign(thrower, 'wxyz');
    } catch (e) {
      error = e;
    }

    /* istanbul ignore next */
    if (thrower[1] === 'x') {
      // IE 9 doesn't throw in strict mode with preventExtensions
      expect(error).toEqual(expect.any(RangeError));
    } else {
      expect(error).toEqual(expect.any(TypeError));
      expect(thrower).toEqual(expected);
    }
  });

  it('works with getters and setters', () => {
    const subject = {
      1: 2,
      2: 3,
      3: 4,
    };

    const props = {
      get() {
        return 3;
      },
      set(v) {
        /* istanbul ignore next */
        throw new RangeError(`IE 9 does not throw on preventExtensions: ${v}`);
      },
    };

    Object.defineProperty(subject, 2, props);

    const expected = {
      1: 2,
      2: 3,
      3: 4,
    };

    Object.defineProperty(expected, 2, props);
    expect(subject).toEqual(expected);
    const actual = assign({}, subject);
    expect(actual).toEqual(expected);
  });

  ifSymbolsIt('includes enumerable symbols, after keys', () => {
    const visited = [];
    const obj = {};
    Object.defineProperty(obj, 'a', {
      enumerable: true,
      get() {
        visited.push('a');
        return 42;
      },
    });

    const symbol = Symbol('enumerable');
    Object.defineProperty(obj, symbol, {
      enumerable: true,
      get() {
        visited.push(symbol);
        return Infinity;
      },
    });

    const nonEnumSymbol = Symbol('non-enumerable');
    Object.defineProperty(obj, nonEnumSymbol, {
      enumerable: false,
      get() {
        /* istanbul ignore next */
        visited.push(nonEnumSymbol);
        /* istanbul ignore next */
        return -Infinity;
      },
    });

    const target = assign({}, obj);
    expect(visited).toEqual(['a', symbol]);
    expect(target.a).toBe(42);
    expect(target[symbol]).toBe(Infinity);
    expect(target[nonEnumSymbol]).not.toBe(-Infinity);
  });
});
