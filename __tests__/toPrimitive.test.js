import {toPrimitive} from '../dist/caboodle-x';

/* istanbul ignore next */
const hasSymbols =
  typeof Symbol === 'function' && typeof Symbol('') === 'symbol';
/* istanbul ignore next */
const itHasSymbols = hasSymbols ? it : xit;
/* istanbul ignore next */
const hasSymbolToPrimitive =
  hasSymbols && typeof Symbol.toPrimitive === 'symbol';
/* istanbul ignore next */
const itHasSymbolToPrimitive = hasSymbolToPrimitive ? it : xit;

const primitives = [
  null,
  undefined,
  true,
  false,
  0,
  -0,
  42,
  Infinity,
  -Infinity,
  '',
  'abc',
];

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

/* istanbul ignore next */
const coercibleFnObject = {
  toString() {
    return 42;
  },
  valueOf() {
    return function valueOfFn() {};
  },
};

/* istanbul ignore next */
const uncoercibleObject = {
  toString() {
    return {};
  },
  valueOf() {
    return {};
  },
};

/* istanbul ignore next */
const uncoercibleFnObject = {
  toString() {
    return function toStrFn() {};
  },
  valueOf() {
    return function valueOfFn() {};
  },
};

describe('toPrimitive', () => {
  it('is a function', () => {
    expect(typeof toPrimitive).toBe('function');
  });

  it('primitives', () => {
    primitives.forEach((i) => {
      expect(toPrimitive(i)).toBe(i);
      expect(toPrimitive(i, String)).toBe(i);
      expect(toPrimitive(i, Number)).toBe(i);
    });

    expect(Number.isNaN(toPrimitive(NaN))).toBe(true);
    expect(Number.isNaN(toPrimitive(NaN, String))).toBe(true);
    expect(Number.isNaN(toPrimitive(NaN, Number))).toBe(true);
  });

  itHasSymbols('Symbols', () => {
    const symbols = [Symbol('foo'), Symbol.iterator, Symbol.for('foo')];

    symbols.forEach((sym) => {
      expect(toPrimitive(sym)).toBe(sym);
      expect(toPrimitive(sym, String)).toBe(sym);
      expect(toPrimitive(sym, Number)).toBe(sym);
    });

    const primitiveSym = Symbol('primitiveSym');
    const objectSym = Object(primitiveSym);
    expect(toPrimitive(objectSym)).toBe(primitiveSym);
    expect(toPrimitive(objectSym, String)).toBe(primitiveSym);
    expect(toPrimitive(objectSym, Number)).toBe(primitiveSym);
  });

  it('Arrays', () => {
    const arrays = [[], ['a', 'b'], [1, 2]];
    arrays.forEach((arr) => {
      expect(toPrimitive(arr)).toBe(String(arr));
      expect(toPrimitive(arr, String)).toBe(String(arr));
      expect(toPrimitive(arr, Number)).toBe(String(arr));
    });
  });

  it('Dates', () => {
    const dates = [new Date(), new Date(0)];
    dates.forEach((date) => {
      expect(toPrimitive(date)).toBe(String(date));
      expect(toPrimitive(date, String)).toBe(String(date));
      expect(toPrimitive(date, Number)).toBe(Number(date));
    });

    const date = new Date(NaN);
    expect(toPrimitive(date)).toBe(String(date));
    expect(toPrimitive(date, String)).toBe(String(date));
    expect(Number.isNaN(toPrimitive(date, Number))).toBe(true);
  });

  it('Objects', () => {
    expect(toPrimitive(coercibleObject)).toBe(coercibleObject.valueOf());
    expect(toPrimitive(coercibleObject, Number)).toBe(coercibleObject.valueOf());
    expect(toPrimitive(coercibleObject, String)).toBe(coercibleObject.toString());

    expect(toPrimitive(coercibleFnObject)).toBe(coercibleFnObject.toString());
    expect(toPrimitive(coercibleFnObject, Number)).toBe(coercibleFnObject.toString());
    expect(toPrimitive(coercibleFnObject, String)).toBe(coercibleFnObject.toString());

    expect(toPrimitive({})).toBe('[object Object]');
    expect(toPrimitive({}, Number)).toBe('[object Object]');
    expect(toPrimitive({}, String)).toBe('[object Object]');

    expect(toPrimitive(toStringOnlyObject)).toBe(toStringOnlyObject.toString());
    expect(toPrimitive(toStringOnlyObject, Number)).toBe(toStringOnlyObject.toString());
    expect(toPrimitive(toStringOnlyObject, String)).toBe(toStringOnlyObject.toString());

    expect(toPrimitive(valueOfOnlyObject)).toBe(valueOfOnlyObject.valueOf());
    expect(toPrimitive(valueOfOnlyObject, Number)).toBe(valueOfOnlyObject.valueOf());
    expect(toPrimitive(valueOfOnlyObject, String)).toBe(valueOfOnlyObject.valueOf());
  });

  itHasSymbolToPrimitive('Symbol.toPrimitive', () => {
    /* istanbul ignore next */
    const overriddenObject = {
      toString() {
        throw new Error();
      },
      valueOf() {
        throw new Error();
      },
    };

    overriddenObject[Symbol.toPrimitive] = function (hint) {
      return String(hint);
    };

    expect(toPrimitive(overriddenObject)).toBe(
      'default',
      'object with Symbol.toPrimitive + no hint invokes that',
    );
    expect(toPrimitive(overriddenObject, Number)).toBe(
      'number',
      'object with Symbol.toPrimitive + hint Number invokes that',
    );
    expect(toPrimitive(overriddenObject, String)).toBe(
      'string',
      'object with Symbol.toPrimitive + hint String invokes that',
    );

    const nullToPrimitive = {
      toString: coercibleObject.toString,
      valueOf: coercibleObject.valueOf,
    };

    nullToPrimitive[Symbol.toPrimitive] = null;
    expect(toPrimitive(nullToPrimitive)).toBe(toPrimitive(coercibleObject));
    expect(toPrimitive(nullToPrimitive, Number)).toBe(toPrimitive(coercibleObject, Number));
    expect(toPrimitive(nullToPrimitive, String)).toBe(toPrimitive(coercibleObject, String));
  });

  itHasSymbolToPrimitive('Symbol.toPrimitive exceptions', () => {
    /* istanbul ignore next */
    const nonFunctionToPrimitive = {
      toString() {
        throw new Error();
      },
      valueOf() {
        throw new Error();
      },
    };

    nonFunctionToPrimitive[Symbol.toPrimitive] = {};
    expect(() => {
      toPrimitive(nonFunctionToPrimitive);
    }).toThrowErrorMatchingSnapshot();

    /* istanbul ignore next */
    const uncoercibleToPrimitive = {
      toString() {
        throw new Error();
      },
      valueOf() {
        throw new Error();
      },
    };

    uncoercibleToPrimitive[Symbol.toPrimitive] = function (hint) {
      /* istanbul ignore next */
      return {
        toString() {
          return hint;
        },
      };
    };

    expect(() => {
      toPrimitive(uncoercibleToPrimitive);
    }).toThrowErrorMatchingSnapshot();

    /* istanbul ignore next */
    const throwingToPrimitive = {
      toString() {
        throw new Error();
      },
      valueOf() {
        throw new Error();
      },
    };

    throwingToPrimitive[Symbol.toPrimitive] = function (hint) {
      throw new RangeError(hint);
    };

    expect(() => {
      toPrimitive(throwingToPrimitive);
    }).toThrowErrorMatchingSnapshot();
  });

  it('exceptions', () => {
    expect(() => {
      toPrimitive(uncoercibleObject);
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      toPrimitive(uncoercibleObject, Number);
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      toPrimitive(uncoercibleObject, String);
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      toPrimitive(uncoercibleFnObject);
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      toPrimitive(uncoercibleFnObject, Number);
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      toPrimitive(uncoercibleFnObject, String);
    }).toThrowErrorMatchingSnapshot();
  });
});
