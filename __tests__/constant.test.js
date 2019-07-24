import {constant} from 'src/caboodle-x';

describe('constant', () => {
  it('should be a function', () => {
    expect(constant).toBeInstanceOf(Function);
  });

  it('should return a constant value', () => {
    const array = [];
    const object = {};
    const arrayConst = constant(array);
    const objectConst = constant(object);

    expect(arrayConst()).toBe(array);
    expect(objectConst()).toBe(object);
  });
});
