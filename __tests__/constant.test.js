import {constant} from '../index';

describe('constant', () => {
  it('should be a function', () => {
    expect(constant).toBeInstanceOf(Function);
  });

  it('should return a constant value', () => {
    const array = [];
    const object = {};
    const ARRAY = constant(array);
    const OBJECT = constant(object);

    expect(ARRAY()).toBe(array);
    expect(OBJECT()).toBe(object);
  });
});
