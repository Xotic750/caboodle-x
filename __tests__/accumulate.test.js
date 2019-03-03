import {accumulate} from '../index';

const createArrayLike = function(arr) {
  const o = {};
  const {length} = arr;
  for (let i = 0; i < length; i += 1) {
    o[i] = arr[i];
  }

  o.length = length;

  return o;
};

describe('accumulate', () => {
  let testSubject;

  beforeEach(() => {
    testSubject = [1, 2, 3];
  });

  it('is a function', () => {
    expect(typeof accumulate).toBe('function');
  });

  it('should throw when array is null or undefined', () => {
    expect(() => {
      accumulate();
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      accumulate(undefined);
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      accumulate(null);
    }).toThrowErrorMatchingSnapshot();
  });

  describe('array', () => {
    it('should pass the correct arguments to the callback', () => {
      const spy = jest.fn().mockReturnValue(0);
      accumulate(testSubject, spy);
      expect(JSON.parse(JSON.stringify(spy.mock.calls[0]))).toStrictEqual([1, 2, 1, testSubject]);
    });

    it('should start with the right initialValue', () => {
      const spy = jest.fn().mockReturnValue(0);
      accumulate(testSubject, spy, 0);
      expect(JSON.parse(JSON.stringify(spy.mock.calls[0]))).toStrictEqual([0, 1, 0, testSubject]);
    });

    it('should not affect elements added to the array after it has begun', () => {
      const arr = [1, 2, 3];

      let i = 0;
      accumulate(arr, (a, b) => {
        i += 1;

        if (i <= 4) {
          arr.push(a + 3);
        }

        return b;
      });

      expect(arr).toStrictEqual([1, 2, 3, 4, 5]);

      expect(i).toBe(2);
    });

    it('should work as expected for empty arrays', () => {
      const spy = jest.fn();
      expect(() => {
        accumulate([], spy);
      }).toThrowErrorMatchingSnapshot();

      expect(spy).not.toHaveBeenCalled();
    });

    it('should throw correctly if no callback is given', () => {
      expect(() => {
        accumulate(testSubject);
      }).toThrowErrorMatchingSnapshot();
    });

    it('should return the expected result', () => {
      expect(accumulate(testSubject, (a, b) => String(a || '') + String(b || ''))).toBe(testSubject.join(''));
    });

    it('should not directly affect the passed array', () => {
      const copy = testSubject.slice();
      accumulate(testSubject, (a, b) => a + b);

      expect(testSubject).toStrictEqual(copy);
    });

    it('should skip non-set values', () => {
      delete testSubject[1];
      const visited = {};
      accumulate(testSubject, (a, b) => {
        if (a) {
          visited[a] = true;
        }

        if (b) {
          visited[b] = true;
        }

        return 0;
      });

      expect(visited).toStrictEqual({1: true, 3: true});
    });
  });

  describe('array-like objects', () => {
    let testObject;

    beforeEach(() => {
      testObject = createArrayLike(testSubject);
    });

    it('should pass the correct arguments to the callback', () => {
      const spy = jest.fn().mockReturnValue(0);
      accumulate(testObject, spy);
      expect(JSON.parse(JSON.stringify(spy.mock.calls[0]))).toStrictEqual([1, 2, 1, testObject]);
    });

    it('should start with the right initialValue', () => {
      const spy = jest.fn().mockReturnValue(0);
      accumulate(testObject, spy, 0);
      expect(JSON.parse(JSON.stringify(spy.mock.calls[0]))).toStrictEqual([0, 1, 0, testObject]);
    });

    it('should not affect elements added to the array after it has begun', () => {
      const arr = createArrayLike([1, 2, 3]);

      let i = 0;
      accumulate(arr, (a, b) => {
        i += 1;

        if (i <= 4) {
          arr[i + 2] = a + 3;
        }

        return b;
      });

      expect(arr).toStrictEqual({
        0: 1,
        1: 2,
        2: 3,
        3: 4,
        4: 5,
        length: 3,
      });

      expect(i).toBe(2);
    });

    it('should work as expected for empty arrays', () => {
      const spy = jest.fn();
      expect(() => {
        accumulate({length: 0}, spy);
      }).toThrowErrorMatchingSnapshot();

      expect(spy).not.toHaveBeenCalled();
    });

    it('should throw correctly if no callback is given', () => {
      expect(() => {
        accumulate(testObject);
      }).toThrowErrorMatchingSnapshot();
    });

    it('should return the expected result', () => {
      expect(accumulate(testObject, (a, b) => String(a || '') + String(b || ''))).toBe('123');
    });

    it('should not directly affect the passed array', () => {
      const copy = createArrayLike(testSubject);
      accumulate(testObject, (a, b) => a + b);

      expect(testObject).toStrictEqual(copy);
    });

    it('should skip non-set values', () => {
      delete testObject[1];
      const visited = {};
      accumulate(testObject, (a, b) => {
        if (a) {
          visited[a] = true;
        }

        if (b) {
          visited[b] = true;
        }

        return 0;
      });

      expect(visited).toStrictEqual({1: true, 3: true});
    });
  });

  it('should have a boxed object as list argument of callback', () => {
    let actual;
    accumulate('foo', (accumulator, item, index, list) => {
      actual = list;
    });

    expect(typeof actual).toBe('object');
    expect(Object.prototype.toString.call(actual)).toBe('[object String]');
  });
});
