import {sift} from '../index';

const itHasDoc = typeof document !== 'undefined' && document ? it : xit;

const createArrayLike = function(arr) {
  const o = {};
  const {length} = arr;
  for (let i = 0; i < length; i += 1) {
    o[i] = arr[i];
  }

  o.length = length;
  return o;
};

describe('sift', () => {
  let filteredArray;
  let testSubject;

  const callBack = function(o, i) {
    return i !== 3 && i !== 5;
  };

  beforeEach(() => {
    testSubject = [2, 3, undefined, true, 'hej', 3, null, false, 0];

    delete testSubject[1];
    filteredArray = [2, undefined, undefined, 'hej', null, false, 0];
  });

  it('is a function', () => {
    expect(typeof sift).toBe('function');
  });

  it('should throw when array is null or undefined', () => {
    expect(() => {
      sift();
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      sift(undefined);
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      sift(null);
    }).toThrowErrorMatchingSnapshot();
  });

  describe('Array object', () => {
    it('should call the callBack with the proper arguments', () => {
      const predicate = jest.fn();
      const arr = ['1'];
      sift(arr, predicate);
      expect(predicate).toHaveBeenCalledWith('1', 0, arr);
    });

    it('should not affect elements added to the array after it has begun', () => {
      const arr = [1, 2, 3];

      let i = 0;
      sift(arr, (a) => {
        i += 1;
        if (i <= 4) {
          arr.push(a + 3);
        }

        return true;
      });

      expect(arr).toEqual([1, 2, 3, 4, 5, 6]);

      expect(i).toBe(3);
    });

    it('should not skip unset values', () => {
      const passedValues = [];
      testSubject = [1, 2, 3, 4];

      delete testSubject[1];
      sift(testSubject, (o, i) => {
        passedValues[i] = o;
        return true;
      });

      expect(passedValues).toEqual(testSubject);
    });

    it('should pass the right context to the sift', () => {
      const passedValues = [];
      testSubject = [1, 2, 3, 4];

      delete testSubject[1];
      sift(
        testSubject,
        function(o, i) {
          this[i] = o;
          return true;
        }.bind(passedValues),
      );

      expect(passedValues).toEqual(testSubject);
    });

    it('should set the right context when given none', () => {
      let context;
      sift([1], function() {
        context = this;
      });

      expect(context).toBe(
        function() {
          return this;
        }.call(),
      );
    });

    it('should remove only the values for which the callBack returns false', () => {
      const result = sift(testSubject, callBack);
      expect(result).toEqual(filteredArray);
    });

    it('should leave the original array untouched', () => {
      const copy = testSubject.slice();
      sift(testSubject, callBack);
      expect(testSubject).toEqual(copy);
    });

    it('should not be affected by same-index mutation', () => {
      const results = sift([1, 2, 3], (value, index, array) => {
        array[index] = 'a';
        return true;
      });

      expect(results).toEqual([1, 2, 3]);
    });
  });

  describe('Array like', () => {
    let testObject;

    beforeEach(() => {
      testObject = createArrayLike(testSubject);
    });

    it('should call the predicate with the proper arguments', () => {
      const predicate = jest.fn();
      const arr = createArrayLike(['1']);
      sift(arr, predicate);
      expect(predicate).toHaveBeenCalledWith('1', 0, arr);
    });

    it('should not affect elements added to the array after it has begun', () => {
      const arr = createArrayLike([1, 2, 3]);

      let i = 0;
      sift(arr, (a) => {
        i += 1;
        if (i <= 4) {
          arr[i + 2] = a + 3;
          arr.length += 1;
        }

        return true;
      });

      expect(Array.prototype.slice.call(arr)).toEqual([1, 2, 3, 4, 5, 6]);

      expect(i).toBe(3);
    });

    it('should skip non-set values', () => {
      const passedValues = createArrayLike([]);
      testObject = createArrayLike([1, 2, 3, 4]);

      delete testObject[1];
      sift(testObject, (o, i) => {
        passedValues[i] = o;
        passedValues.length = i + 1;
        return true;
      });

      expect(passedValues).toEqual(testObject);
    });

    it('should set the right context when given none', () => {
      let context;
      sift(
        createArrayLike([1]),
        function() {
          context = this;
        },
        undefined,
      );

      expect(context).toBe(
        function() {
          return this;
        }.call(),
      );
    });

    it('should pass the right context to the sift', () => {
      const passedValues = {};
      testObject = createArrayLike([1, 2, 3, 4]);

      delete testObject[1];
      sift(
        testObject,
        function(o, i) {
          this[i] = o;
          this.length = i + 1;
          return true;
        }.bind(passedValues),
      );

      expect(passedValues).toEqual(testObject);
    });

    it('should remove only the values for which the callBack returns false', () => {
      const result = sift(testObject, callBack);
      expect(result).toEqual(filteredArray);
    });

    it('should leave the original array untouched', () => {
      const copy = createArrayLike(testSubject);
      sift(testObject, callBack);
      expect(testObject).toEqual(copy);
    });
  });

  it('should have a boxed object as list argument of callBack', () => {
    let actual;
    sift('foo', (item, index, list) => {
      actual = list;
    });

    expect(typeof actual).toBe('object');
    expect(Object.prototype.toString.call(actual)).toBe('[object String]');
  });

  it('should work with arguments', () => {
    const argObj = (function() {
      return arguments;
    })('1');

    const callback = jest.fn();
    sift(argObj, callback);
    expect(callback).toHaveBeenCalledWith('1', 0, argObj);
  });

  it('should work with strings', () => {
    const callback = jest.fn();
    const string = '1';
    sift(string, callback);
    expect(callback).toHaveBeenCalledWith('1', 0, string);
  });

  itHasDoc('should work wih DOM elements', () => {
    const fragment = document.createDocumentFragment();
    const div = document.createElement('div');
    fragment.appendChild(div);
    const callback = jest.fn();
    sift(fragment.childNodes, callback);
    expect(callback).toHaveBeenCalledWith(div, 0, fragment.childNodes);
  });
});
