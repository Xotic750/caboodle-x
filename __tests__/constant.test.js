import 'babel-polyfill';
import {constant} from '../dist/caboodle-x';

describe('constant', () => {
  it('should be a function', () => {
    expect(constant).toBeInstanceOf(Function);
  });

  it('should return ac onstant value', () => {
    const array = [];
    const object = {};
    const ARRAY = constant(array);
    const OBJECT = constant(object);

    expect(ARRAY()).toBe(array);
    expect(OBJECT()).toBe(object);
  });
});
