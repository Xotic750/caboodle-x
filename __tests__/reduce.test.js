import 'babel-polyfill';
import {reduce} from '../dist/caboodle-x';

const createArrayLike = function (arr) {
  const o = {};
  arr.forEach((e, i) => {
    o[i] = e;
  });

  o.length = arr.length;
  return o;
};

describe('reduce', () => {
  let testSubject;

  beforeEach(() => {
    testSubject = [
      1,
      2,
      3,
    ];
  });

  it('is a function', () => {
    expect(typeof reduce).toBe('function');
  });

  it('should throw when callback is not a function', () => {
    expect(() => {
      reduce();
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      reduce(undefined);
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      reduce(null);
    }).toThrowErrorMatchingSnapshot();
  });

  describe('Array', () => {
    it('should pass the correct arguments to the callback', () => {
      const spy = jest.fn().mockReturnValue(0);
      reduce(testSubject, spy);
      expect(spy.mock.calls).toEqual([
        [1, 2, 1, [1, 2, 3]],
        [0, 3, 2, [1, 2, 3]],
      ]);
    });

    it('should start with the right initialValue', () => {
      const spy = jest.fn().mockReturnValue(0);
      reduce(testSubject, spy, 0);
      expect(spy.mock.calls).toEqual([
        [0, 1, 0, testSubject],
        [0, 2, 1, testSubject],
        [0, 3, 2, testSubject],
      ]);
    });

    it('should not affect elements added to the array after it has begun', () => {
      const arr = [
        1,
        2,
        3,
      ];

      let i = 0;
      reduce(arr, (a, b) => {
        i += 1;
        if (i <= 4) {
          arr.push(a + 3);
        }
        return b;
      });

      expect(arr).toEqual([
        1,
        2,
        3,
        4,
        5,
      ]);

      expect(i).toBe(2);
    });

    it('should work as expected for empty arrays', () => {
      const spy = jest.fn();
      expect(() => {
        reduce([], spy);
      }).toThrowErrorMatchingSnapshot();

      expect(spy).not.toHaveBeenCalled();
    });

    it('should throw correctly if no callback is given', () => {
      expect(() => {
        reduce(testSubject);
      }).toThrowErrorMatchingSnapshot();
    });

    it('should return the expected result', () => {
      expect(reduce(testSubject, (a, b) => String(a || '') + String(b || ''))).toBe(testSubject.join(''));
    });

    it('should not directly affect the passed array', () => {
      const copy = testSubject.slice();
      reduce(testSubject, (a, b) => a + b);

      expect(testSubject).toEqual(copy);
    });

    it('should skip non-set values', () => {
      delete testSubject[1];
      const visited = {};
      reduce(testSubject, (a, b) => {
        if (a) {
          visited[a] = true;
        }

        if (b) {
          visited[b] = true;
        }

        return 0;
      });

      expect(visited).toEqual({1: true, 3: true});
    });
  });

  describe('Array-like objects', () => {
    let testObject;

    beforeEach(() => {
      testObject = createArrayLike(testSubject);
    });

    it('should pass the correct arguments to the callback', () => {
      const spy = jest.fn().mockReturnValue(0);
      reduce(testObject, spy);
      expect(spy.mock.calls).toEqual([
        [1, 2, 1, testObject],
        [0, 3, 2, testObject],
      ]);
    });

    it('should start with the right initialValue', () => {
      const spy = jest.fn().mockReturnValue(0);
      reduce(testObject, spy, 0);
      expect(spy.mock.calls).toEqual([
        [0, 1, 0, testObject],
        [0, 2, 1, testObject],
        [0, 3, 2, testObject],
      ]);
    });

    it('should not affect elements added to the array after it has begun', () => {
      const arr = createArrayLike([
        1,
        2,
        3,
      ]);

      let i = 0;
      reduce(arr, (a, b) => {
        i += 1;
        if (i <= 4) {
          arr[i + 2] = a + 3;
        }

        return b;
      });

      expect(arr).toEqual({
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
        reduce({length: 0}, spy);
      }).toThrowErrorMatchingSnapshot();

      expect(spy).not.toHaveBeenCalled();
    });

    it('should throw correctly if no callback is given', () => {
      expect(() => {
        reduce(testObject);
      }).toThrowErrorMatchingSnapshot();
    });

    it('should return the expected result', () => {
      expect(reduce(testObject, (a, b) => String(a || '') + String(b || ''))).toBe('123');
    });

    it('should not directly affect the passed array', () => {
      const copy = createArrayLike(testSubject);
      reduce(testObject, (a, b) => a + b);

      expect(testObject).toEqual(copy);
    });

    it('should skip non-set values', () => {
      delete testObject[1];
      const visited = {};
      reduce(testObject, (a, b) => {
        if (a) {
          visited[a] = true;
        }

        if (b) {
          visited[b] = true;
        }

        return 0;
      });

      expect(visited).toEqual({1: true, 3: true});
    });
  });

  it('should have a boxed object as list argument of callback', () => {
    let actual;
    reduce('foo', (accumulator, item, index, list) => {
      actual = list;
    });

    expect(typeof actual).toBe('object');
    expect(Object.prototype.toString.call(actual)).toBe('[object String]');
  });
});
