import {negate} from 'src/caboodle-x';

const stubTrue = () => true;
const isEven = (n) => n % 2 === 0;

describe('negate', () => {
  it('is a function', () => {
    expect(typeof negate).toBe('function');
  });

  it('should throw when array is null or undefined', () => {
    expect(() => {
      negate();
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      negate(undefined);
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      negate(null);
    }).toThrowErrorMatchingSnapshot();
  });

  it('should create a function that negates the result of `func`', () => {
    const negateFn = negate(isEven);

    expect(negateFn(1)).toBe(true);
    expect(negateFn(2)).toBe(false);
  });

  it('should create a function that accepts multiple arguments', () => {
    let argCount;
    const count = 5;
    const negateFn = negate(function() {
      argCount = arguments.length;
    });
    const expected = Array(count)
      .fill()
      .map(stubTrue);

    const actual = Array(count)
      .fill()
      .map((unused, index) => {
        switch (index) {
          case 0:
            negateFn();
            break;

          case 1:
            negateFn(1);
            break;

          case 2:
            negateFn(1, 2);
            break;

          case 3:
            negateFn(1, 2, 3);
            break;

          case 4:
          default:
            negateFn(1, 2, 3, 4);
        }

        return argCount === index;
      });

    expect(actual).toStrictEqual(expected);
  });
});
