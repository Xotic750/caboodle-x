import 'babel-polyfill';
import {defineValidatorProperty} from '../dist/caboodle-x';

const has = Object.prototype.hasOwnProperty;
const doc = typeof document !== 'undefined' && document;
const itHasDoc = doc ? it : xit;

describe('defineValidatorProperty', () => {
  let obj;

  beforeEach(() => {
    obj = {};

    defineValidatorProperty(obj, 'name', {
      configurable: true,
      enumerable: true,
      nilable: false,
      validator: () => true,
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

  itHasDoc('works with DOM elements', () => {
    const div = document.createElement('div');
    defineValidatorProperty(div, 'blah', {value: 1});
    expect(div.blah).toBe(1);
  });
});
