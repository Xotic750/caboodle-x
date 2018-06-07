import {isFalsey} from '../index';

const coercibleObject = {
  toString() {
    return 42;
  },
  valueOf() {
    return 3;
  },
};

const valueOfOnlyObject = {
  toString() {
    return {};
  },
  valueOf() {
    return 4;
  },
};

const toStringOnlyObject = {
  toString() {
    return 7;
  },
  valueOf() {
    return {};
  },
};

const objects = [{}, coercibleObject, toStringOnlyObject, valueOfOnlyObject];

const nullPrimitives = [undefined, null];
const falsies = [].concat(nullPrimitives, false, '', 0, -0, NaN);
const truthies = [].concat(true, 'foo', 42, objects);

describe('isFalsey', () => {
  it('is a function', () => {
    expect(typeof isFalsey).toBe('function');
  });

  it('should return true for falsey values', () => {
    const expected = falsies.map(() => true);

    const actual = falsies.map((item) => isFalsey(item));

    expect(actual).toEqual(expected);
  });

  it('should return false for truthy values', () => {
    const expected = truthies.map(() => false);

    const actual = truthies.map((item) => isFalsey(item));

    expect(actual).toEqual(expected);
  });
});
