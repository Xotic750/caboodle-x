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

    expect(actual).toEqual(expected);
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

    expect(actual).toEqual(expected);
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

    expect(actual).toEqual(expected);
  });

  it('should have the correct this argument', () => {
    const pusher = function(a, b) {
      this.push(a, b);
      return 2;
    };

    const thisArg = [];
    const actual = attempt.call(thisArg, pusher, 1, 2);
    const expected = {
      threw: false,
      value: 2,
    };

    expect(thisArg).toEqual([1, 2]);
    expect(actual).toEqual(expected);
  });
});
