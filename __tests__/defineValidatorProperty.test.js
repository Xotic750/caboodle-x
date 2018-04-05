import {defineValidatorProperty} from '../dist/caboodle-x';

const has = Object.prototype.hasOwnProperty;
/* istanbul ignore next */
const doc = typeof document !== 'undefined' && document;
/* istanbul ignore next */
const itHasDoc = doc ? it : xit;

const stubTrue = () => true;

describe('defineValidatorProperty', () => {
  let obj;

  beforeEach(() => {
    obj = {};

    defineValidatorProperty(obj, 'name', {
      configurable: true,
      enumerable: true,
      nilable: false,
      validator: stubTrue,
      value: 'Testing',
      writable: true,
    });
  });

  it('should return the initial value', () => {
    expect(has.call(obj, 'name')).toBe(true);
    expect(obj.name).toBe('Testing');
  });

  it('should be setable', () => {
    obj.name = 'Other';
    expect(obj.name).toBe('Other');
  });

  it('should return the parent initial value', () => {
    const child = Object.create(obj, {});

    expect(child.name).toBe('Testing');
    expect(has.call(child, 'name')).toBe(false);
  });

  it('should not override the parent value', () => {
    const child = Object.create(obj, {});

    defineValidatorProperty(child, 'name', {value: 'Other'});

    expect(obj.name).toBe('Testing');
    expect(child.name).toBe('Other');
  });

  it('should throw error for non object', () => {
    expect(() => {
      defineValidatorProperty(42, 'name', {});
    }).toThrowErrorMatchingSnapshot();
  });

  it('should not throw error for empty descriptor', () => {
    defineValidatorProperty({}, 'name', {});
  });

  it('should throw error if getter is not a function', () => {
    expect(() => {
      defineValidatorProperty({}, 'name', {
        get: null,
      });
    }).toThrowErrorMatchingSnapshot();
  });

  it('should throw error if getter and value defined', () => {
    expect(() => {
      defineValidatorProperty({}, 'name', {
        get() {},
        value: null,
      });
    }).toThrowErrorMatchingSnapshot();
  });

  it('should throw error if getter and writeable is truthy', () => {
    expect(() => {
      defineValidatorProperty({}, 'name', {
        get() {},
        writable: true,
      });
    }).toThrowErrorMatchingSnapshot();
  });

  it('should throw error if setter is not a function', () => {
    expect(() => {
      defineValidatorProperty({}, 'name', {
        set: null,
      });
    }).toThrowErrorMatchingSnapshot();
  });

  it('should throw error if setter and value defined', () => {
    expect(() => {
      defineValidatorProperty({}, 'name', {
        set() {},
        value: null,
      });
    }).toThrowErrorMatchingSnapshot();
  });

  it('should throw error if setter and writeable is truthy', () => {
    expect(() => {
      defineValidatorProperty({}, 'name', {
        set() {},
        writable: true,
      });
    }).toThrowErrorMatchingSnapshot();
  });

  it('should not throw error if has accessers', () => {
    defineValidatorProperty({}, 'name', {
      get() {},
      set() {},
    });
  });

  it('getters and setters should work', () => {
    let value = 1;
    const accessible = {};

    defineValidatorProperty(accessible, 'name', {
      configurable: true,
      enumerable: true,
      nilable: false,
      validator: stubTrue,
      get() {
        return value;
      },
      set(newValue) {
        value = newValue;

        return value;
      },
    });

    expect(accessible.name).toBe(1);
    expect((accessible.name = 2)).toBe(2);
    expect(accessible.name).toBe(2);
  });

  it('getters and no setter should work', () => {
    const value = 1;
    const accessible = {};

    defineValidatorProperty(accessible, 'name', {
      configurable: true,
      enumerable: true,
      nilable: false,
      validator: stubTrue,
      get() {
        return value;
      },
    });

    expect(accessible.name).toBe(1);
    expect(() => {
      accessible.name = 2;
    }).toThrowErrorMatchingSnapshot();
    expect(accessible.name).toBe(1);
  });

  it('setter and no getter should work', () => {
    let value = 1;
    const accessible = {};

    defineValidatorProperty(accessible, 'name', {
      configurable: true,
      enumerable: true,
      nilable: false,
      validator: stubTrue,
      set(newValue) {
        value = newValue;

        return value;
      },
    });

    expect(accessible.name).toBe(undefined);
    expect(value).toBe(1);
    expect((accessible.name = 2)).toBe(2);
    expect(accessible.name).toBe(undefined);
    expect(value).toBe(2);
  });

  it('as normal writable defineProperty', () => {
    const accessible = {};

    defineValidatorProperty(accessible, 'name', {
      configurable: true,
      enumerable: true,
      value: 1,
      writable: true,
    });

    expect(accessible.name).toBe(1);
    expect((accessible.name = 2)).toBe(2);
    expect(accessible.name).toBe(2);
  });

  it('as normal non-writable defineProperty', () => {
    const accessible = {};

    defineValidatorProperty(accessible, 'name', {
      configurable: true,
      enumerable: true,
      value: 1,
      writable: false,
    });

    expect(accessible.name).toBe(1);
    expect(() => {
      accessible.name = 2;
    }).toThrowErrorMatchingSnapshot();
    expect(accessible.name).toBe(1);
  });

  it('should not throw if validator passes test', () => {
    const accessible = {};

    defineValidatorProperty(accessible, 'name', {
      configurable: true,
      enumerable: true,
      nilable: false,
      validator: x => typeof x === 'boolean',
      value: true,
      writable: true,
    });
  });

  it('should throw if validator fails test', () => {
    const accessible = {};

    expect(() => {
      defineValidatorProperty(accessible, 'name', {
        configurable: true,
        enumerable: true,
        nilable: false,
        validator: x => typeof x === 'boolean',
        value: null,
        writable: true,
      });
    }).toThrowErrorMatchingSnapshot();
  });

  it('should not throw if nilable and initial value is nil', () => {
    const accessible = {};

    defineValidatorProperty(accessible, 'name', {
      configurable: true,
      enumerable: true,
      nilable: true,
      validator: x => typeof x === 'boolean',
      value: undefined,
      writable: true,
    });

    defineValidatorProperty(accessible, 'name', {
      configurable: true,
      enumerable: true,
      nilable: true,
      validator: x => typeof x === 'boolean',
      value: null,
      writable: true,
    });
  });

  it('should throw if nilable and further values fail validator', () => {
    const accessible = {};

    defineValidatorProperty(accessible, 'name', {
      configurable: true,
      enumerable: true,
      nilable: true,
      validator: x => typeof x === 'boolean',
      value: null,
      writable: true,
    });

    expect(() => {
      accessible.name = 'yup';
    }).toThrowErrorMatchingSnapshot();
  });

  it('should not throw if nilable and further values pass validator', () => {
    const accessible = {};

    defineValidatorProperty(accessible, 'name', {
      configurable: true,
      enumerable: true,
      nilable: true,
      validator: x => typeof x === 'boolean',
      value: null,
      writable: true,
    });

    expect((accessible.name = true)).toBe(true);
  });

  itHasDoc('works with DOM elements', () => {
    const div = document.createElement('div');
    defineValidatorProperty(div, 'blah', {value: 1});
    expect(div.blah).toBe(1);
  });
});
