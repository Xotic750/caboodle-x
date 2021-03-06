import {squeeze} from '../index';

const createArrayLike = function(arr) {
  const o = {};
  const {length} = arr;
  for (let i = 0; i < length; i += 1) {
    o[i] = arr[i];
  }

  o.length = length;
  return o;
};

describe('squeeze', () => {
  let filteredArray;
  let testSubject;

  beforeEach(() => {
    testSubject = [2, 3, undefined, true, 'hej', 3, null, false, 0];

    delete testSubject[1];
    filteredArray = [2, undefined, true, 'hej', 3, null, false, 0];
  });

  it('is a function', () => {
    expect(typeof squeeze).toBe('function');
  });

  it('should throw when array is null or undefined', () => {
    expect(() => {
      squeeze();
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      squeeze(undefined);
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      squeeze(null);
    }).toThrowErrorMatchingSnapshot();
  });

  describe('Array object', () => {
    it('should skip unset values', () => {
      delete testSubject[1];
      const passedValues = squeeze(testSubject);

      expect(passedValues).toEqual(filteredArray);
    });

    it('should leave the original array untouched', () => {
      const copy = testSubject.slice();
      squeeze(testSubject);
      expect(testSubject).toEqual(copy);
    });
  });

  describe('Array like', () => {
    let testObject;

    beforeEach(() => {
      testObject = createArrayLike(testSubject);
    });

    it('should skip non-set values', () => {
      delete testObject[1];
      const passedValues = squeeze(testObject);

      expect(passedValues).toEqual(filteredArray);
    });

    it('should leave the original array untouched', () => {
      const copy = createArrayLike(testSubject);
      squeeze(testObject);
      expect(testObject).toEqual(copy);
    });
  });
});
