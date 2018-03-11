import {defineValidatorProperties} from '../dist/caboodle-x';

const has = Object.prototype.hasOwnProperty;
const doc = typeof document !== 'undefined' && document;
const itHasDoc = doc ? it : xit;

const testObj = Object.defineProperty({}, 'foo', {
  value: true,
});

const hasNonEnumerable = Object.keys(testObj).length === 0 && testObj.foo === true;
const itHasNonEnumerable = hasNonEnumerable ? it : xit;

describe('defineValidatorProperties', () => {
  let obj;

  beforeEach(() => {
    obj = {};

    defineValidatorProperties(obj, {
      name: {
        configurable: true,
        enumerable: true,
        nilable: false,
        validator: () => true,
        value: 'Testing',
        writable: true,
      },
      number: {
        configurable: true,
        enumerable: true,
        nilable: false,
        validator: () => true,
        value: 1234,
        writable: true,
      },
    });
  });

  it('is a function', () => {
    expect(typeof defineValidatorProperties).toBe('function');
  });

  it('should be setable', () => {
    obj.name = 'Other';
    expect(obj.name).toBe('Other');
    expect(obj.number).toBe(1234);
  });

  it('should define the constructor property', () => {
    const target = {};
    const newProperties = {constructor: {value: 'new constructor'}};
    defineValidatorProperties(target, newProperties);
    expect(target.constructor).toBe('new constructor');
  });

  it('should return the parent initial value', () => {
    const child = Object.create(obj, {});

    expect(child.name).toBe('Testing');
    expect(child.number).toBe(1234);
    expect(has.call(child, 'name')).toBeFalsy();
    expect(has.call(child, 'number')).toBeFalsy();
  });

  it('should not override the parent value', () => {
    const child = Object.create(obj, {});

    defineValidatorProperties(child, {
      name: {
        value: 'Other',
      },
    });

    expect(obj.name).toBe('Testing');
    expect(child.name).toBe('Other');
  });

  it('should return the target object', () => {
    const child = Object.create(obj, {});

    const ret = defineValidatorProperties(child, {
      name: {
        value: 'Other',
      },
    });

    expect(ret).toBe(child);
  });

  it('should throw error for non object', () => {
    expect(() => {
      defineValidatorProperties(42, {
        name: {
          value: 'Other',
        },
      });
    }).toThrowErrorMatchingSnapshot();
  });

  it('should not throw error for empty descriptor', () => {
    defineValidatorProperties({}, {
      name: {},
    });
  });

  itHasDoc('works with DOM elements', () => {
    const div = document.createElement('div');
    defineValidatorProperties(div, {
      blah: {
        value: 1,
      },
    });

    expect(div.blah).toBe(1);
  });

  itHasNonEnumerable('non-enumerable props should be ignored', () => {
    obj = {};
    const props = {
      foo: {
        value: true,
      },
    };

    Object.defineProperty(props, 'blah', {
      value: {
        value: true,
      },
    });

    expect(props.foo).toEqual({
      value: true,
    });

    expect(props.blah).toEqual({
      value: true,
    });

    defineValidatorProperties(obj, props);

    expect(has.call(obj, 'foo')).toBe(true);
    expect(obj.foo).toBe(true);
    expect(has.call(obj, 'blah')).toBe(false);
    expect(obj.blah).toBe(undefined);
  });
});
