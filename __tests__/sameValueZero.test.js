import 'babel-polyfill';
import {sameValueZero} from '../dist/caboodle-x';

describe('sameValueZero', () => {
  it('Basic', () => {
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
    const objects = [
      {},
      coercibleObject,
      toStringOnlyObject,
      valueOfOnlyObject,
    ];
    const numbers = [
      0,
      -0,
      Infinity,
      -Infinity,
      42,
    ];
    const nonNullPrimitives = [
      true,
      false,
      'foo',
      '',
    ].concat(numbers);
    const primitives = [undefined, null].concat(nonNullPrimitives);
    expect(sameValueZero(NaN, NaN)).toBe(true, 'NaN is SameValueZero as NaN');
    expect(sameValueZero(0, -0)).toBe(true, '+0 is SameValueZero as -0');
    objects.concat(primitives).forEach((val) => {
      expect(sameValueZero(val, val)).toBe(!Number.isNaN(val), `"${val}" is SameValueZero to itself`);
    });
  });
});
