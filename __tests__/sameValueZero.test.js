import {sameValueZero} from '../dist/caboodle-x';
import nonNullPrimitives from './helpers/nonNullPrimitives';
import nils from './helpers/nils';

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

const values = [
  {},
  coercibleObject,
  toStringOnlyObject,
  valueOfOnlyObject,
].concat(nils, nonNullPrimitives);

describe('sameValueZero', () => {
  it('Basic', () => {
    expect(sameValueZero(NaN, NaN)).toBe(true, 'NaN is SameValueZero as NaN');
    expect(sameValueZero(0, -0)).toBe(true, '+0 is SameValueZero as -0');
    values.forEach((val) => {
      expect(sameValueZero(val, val)).toBe(
        !Number.isNaN(val),
        `"${val}" is SameValueZero to itself`,
      );
    });
  });
});
