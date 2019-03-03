import {isNumberFinite} from '../index';

const integers = [5295, -5295, -9007199254740991, 9007199254740991, 0, -0];
const infinities = [Infinity, -Infinity];

const valueOfThree = {
  valueOf() {
    return 3;
  },
};

const valueOfNaN = {
  valueOf() {
    return NaN;
  },
};

const valueOfThrows = {
  valueOf() {
    throw Object(17);
  },
};

const toStringThrows = {
  toString() {
    throw Object(42);
  },
};

const toPrimitiveThrows = {
  toString() {
    throw Object(42);
  },
  valueOf() {
    throw Object(17);
  },
};

const nonNumbers = [
  undefined,
  true,
  false,
  null,
  {},
  [],
  'str',
  '',
  valueOfThree,
  valueOfNaN,
  valueOfThrows,
  toStringThrows,
  toPrimitiveThrows,
  /a/g,
];

const expectFalse = function(item) {
  expect(item).toBe(false);
};

const expectTrue = function(item) {
  expect(item).toBe(true);
};

describe('isNumberFinite', () => {
  it('is a function', () => {
    expect(typeof isNumberFinite).toBe('function');
  });

  it('should work', () => {
    integers.map(isNumberFinite).forEach(expectTrue);
    infinities.map(isNumberFinite).forEach(expectFalse);
    expect(isNumberFinite(Infinity)).toBe(false);
    expect(isNumberFinite(-Infinity)).toBe(false);
    expect(isNumberFinite(NaN)).toBe(false);
    expect(isNumberFinite(4)).toBe(true);
    expect(isNumberFinite(4.5)).toBe(true);
    expect(isNumberFinite('hi')).toBe(false);
    expect(isNumberFinite('1.3')).toBe(false);
    expect(isNumberFinite('51')).toBe(false);
    expect(isNumberFinite(0)).toBe(true);
    expect(isNumberFinite(-0)).toBe(true);
    expect(isNumberFinite(valueOfThree)).toBe(false);
    expect(isNumberFinite(valueOfNaN)).toBe(false);
    expect(isNumberFinite(valueOfThrows)).toBe(false);
    expect(isNumberFinite(toStringThrows)).toBe(false);
    expect(isNumberFinite(toPrimitiveThrows)).toBe(false);
  });

  /* eslint-disable-next-line jest/expect-expect */
  it('should not be confused by type coercion', () => {
    nonNumbers.map(isNumberFinite).forEach(expectFalse);
  });
});
