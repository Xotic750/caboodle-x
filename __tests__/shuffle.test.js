import {shuffle} from '../index';

describe('shuffle', () => {
  let array;
  let object;
  let string;

  beforeEach(() => {
    array = [1, 2, 3];
    object = {
      0: 1,
      1: 2,
      2: 3,
      length: 3,
    };
    string = '123';
  });

  it('is a function', () => {
    expect(typeof shuffle).toBe('function');
  });

  it('should throw when target is null or undefined', () => {
    expect(() => {
      shuffle();
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      shuffle(undefined);
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      shuffle(null);
    }).toThrowErrorMatchingSnapshot();
  });

  it('should return a new array', () => {
    expect(shuffle(array)).not.toBe(array);
  });

  it('should contain the same elements after a collection is shuffled', () => {
    expect(shuffle(array).sort()).toEqual(array);
    expect(shuffle(object).sort()).toEqual(array);
    expect(
      shuffle(string)
        .map(item => Number(item))
        .sort(),
    ).toEqual(array);
  });

  it('should shuffle small collections', () => {
    const actual = new Array(1000)
      .fill()
      .map(() => JSON.stringify(shuffle([1, 2])))
      .reduce((acc, value) => {
        if (acc.includes(value) === false) {
          acc.push(value);
        }

        return acc;
      }, [])
      .sort();

    const expected = ['[1,2]', '[2,1]'];

    expect(actual).toEqual(expected);
  });

  it('should treat number values for `collection` as empty', () => {
    expect(shuffle(1)).toEqual([]);
  });
});
