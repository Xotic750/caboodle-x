import {isError} from 'src/caboodle-x';

describe('isError', () => {
  it('should return `false` for non-error objects', () => {
    const values = [true, 'abc', 1, null, undefined, function() {}, [], /r/];
    const expected = values.map(() => false);
    const actual = values.map(isError);
    expect(actual).toStrictEqual(expected);
  });

  it('should return `true` for error objects', () => {
    const values = [
      new Error(),
      new TypeError(),
      new SyntaxError(),
      new RangeError(),
      new URIError(),
      new ReferenceError(),
      new EvalError(),
      Error.prototype,
      TypeError.prototype,
      SyntaxError.prototype,
      RangeError.prototype,
      URIError.prototype,
      ReferenceError.prototype,
      EvalError.prototype,
      Object.create(Error.prototype),
    ];
    const expected = values.map(() => true);
    const actual = values.map(isError);
    expect(actual).toStrictEqual(expected);
  });

  it('should work with sub-classed Error', () => {
    const MyError = function() {};

    MyError.prototype = Object.create(Error.prototype);
    MyError.prototype.constructor = MyError;
    MyError.prototype.name = 'MyError';

    const MySubError = function() {};

    MySubError.prototype = Object.create(MyError.prototype);
    MySubError.prototype.constructor = MySubError;
    MySubError.prototype.name = 'MySubError';

    expect(isError(new MyError())).toStrictEqual(true, 'MyError');
    expect(isError(new MySubError())).toStrictEqual(true, 'MySubError');
  });
});
