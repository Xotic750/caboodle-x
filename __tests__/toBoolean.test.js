import {toBoolean} from '../dist/caboodle-x';

/* istanbul ignore next */
const coercibleObject = {
  toString() {
    return 42;
  },
  valueOf() {
    return '3';
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
const uncoercibleObject = {
  toString() {
    return {};
  },
  valueOf() {
    return {};
  },
};

const objects = [{}, coercibleObject, toStringOnlyObject, valueOfOnlyObject];

describe('toBoolean', () => {
  it('is a function', () => {
    expect(typeof toBoolean).toBe('function');
  });

  it('shoul return the correct boolean value', () => {
    expect(toBoolean(undefined)).toBe(false, 'undefined coerces to false');
    expect(toBoolean(null)).toBe(false, 'null coerces to false');
    expect(toBoolean(false)).toBe(false, 'false returns false');
    expect(toBoolean(true)).toBe(true, 'true returns true');

    [0, -0, NaN].forEach((falsyNumber) => {
      expect(toBoolean(falsyNumber)).toBe(
        false,
        `falsy number ${falsyNumber} coerces to false`,
      );
    });

    [Infinity, 42, 1, -Infinity].forEach((truthyNumber) => {
      expect(toBoolean(truthyNumber)).toBe(
        true,
        `truthy number ${truthyNumber} coerces to true`,
      );
    });

    expect(toBoolean('')).toBe(false, 'empty string coerces to false');
    expect(toBoolean('foo')).toBe(true, 'nonempty string coerces to true');
    objects.forEach((obj) => {
      expect(toBoolean(obj)).toBe(true, 'object coerces to true');
    });

    expect(toBoolean(uncoercibleObject)).toBe(
      true,
      'uncoercibleObject coerces to true',
    );
  });
});
