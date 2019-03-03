import {isTruthy} from '../index';

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

describe('isTruthy', () => {
  it('is a function', () => {
    expect(typeof isTruthy).toBe('function');
  });

  it('should return false for falsey values', () => {
    const expected = falsies.map(() => false);

    const actual = falsies.map((item) => isTruthy(item));

    expect(actual).toStrictEqual(expected);
  });

  it('should return true for truthy values', () => {
    const expected = truthies.map(() => true);

    const actual = truthies.map((item) => isTruthy(item));

    expect(actual).toStrictEqual(expected);
  });
});
