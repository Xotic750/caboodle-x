import {methodize} from '../dist/caboodle-x';

describe('methodize', () => {
  it('should be a function', () => {
    expect(methodize).toBeInstanceOf(Function);
  });

  it('should call methodized function with context', () => {
    const mockFn = jest.fn();
    const method = methodize(mockFn);
    const context = {};
    const hej = 'hej';
    const hello = 'hello';

    method(context, hej, hello);

    expect(mockFn).toHaveBeenCalledWith(hej, hello);
    expect(mockFn.mock.instances).toHaveLength(1);
    expect(mockFn.mock.instances[0]).toBe(context);
    expect(mockFn.mock.calls).toHaveLength(1);
    expect(mockFn.mock.calls[0]).toHaveLength(2);
    expect(mockFn.mock.calls[0][0]).toBe(hej);
    expect(mockFn.mock.calls[0][1]).toBe(hello);
  });

  it('should throw if not initiated with a function', () => {
    expect(() => {
      methodize([]);
    }).toThrowErrorMatchingSnapshot();
  });
});
