import {attempt} from '../index';

describe('attempt', () => {
  it('is a function', () => {
    expect(typeof attempt).toBe('function');
  });

  it('should return a threw result if not a function', () => {
    const actual = attempt();
    const expected = {
      threw: true,
      value: expect.any(Error),
    };

    expect(actual).toStrictEqual(expected);
  });

  it('should return a threw result', () => {
    let err;
    try {
      throw new Error('Threw');
    } catch (e) {
      err = e;
    }

    const thrower = function() {
      throw err;
    };

    const actual = attempt(thrower, 1, 2);
    const expected = {
      threw: true,
      value: err,
    };

    expect(actual).toStrictEqual(expected);
  });

  it('should return the sum', () => {
    const sumArgs = function(a, b) {
      return a + b;
    };

    const actual = attempt(sumArgs, 1, 2);
    const expected = {
      threw: false,
      value: 3,
    };

    expect(actual).toStrictEqual(expected);
  });

  it('should have the correct this argument', () => {
    const pusher = function(a, b) {
      /* eslint-disable-next-line babel/no-invalid-this */
      this.push(a, b);

      return 2;
    };

    const thisArg = [];
    const actual = attempt.call(thisArg, pusher, 1, 2);
    const expected = {
      threw: false,
      value: 2,
    };

    expect(thisArg).toStrictEqual([1, 2]);
    expect(actual).toStrictEqual(expected);
  });
});
