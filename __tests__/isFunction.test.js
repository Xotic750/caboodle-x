import {isFunction} from '../index';

let hasFat;
try {
  eval('(x, y) => {return this;};');
  hasFat = true;
} catch (ignore) {}

const itHasFat = hasFat ? it : xit;

let hasGen;
try {
  eval('function* idMaker(x, y){};');
  hasGen = true;
} catch (ignore) {}

const itHasGen = hasGen ? it : xit;

let hasAsync;
try {
  eval('async function idAsync(x, y){};');
  hasAsync = true;
} catch (ignore) {}

const itHasAsync = hasAsync ? it : xit;

let hasClass;
try {
  eval('"use strict"; class My {};');
  hasClass = true;
} catch (ignore) {}

const itHasClass = hasClass ? it : xit;

describe('Basic tests', () => {
  it('should return `false` for everything', () => {
    const values = [true, 'abc', 1, null, undefined, new Date(), [], /r/];
    const expected = values.map(() => false);
    const actual = values.map(isFunction);
    expect(actual).toEqual(expected);
  });

  it('should return `true` for everything', () => {
    const values = [
      Object,
      String,
      Boolean,
      Array,
      Function,
      function() {},
      function test(a) {},
      new Function(),
      function test1(a, b) {},
      function test2(a /* , foo */) {},
      function test3(a /* , foo */, b) {},
      function test4(a /* , foo */, b) {},
      function /* foo */ test5(a /* , foo */, b) {},
      function /* foo */ test6(a /* , foo */, b) {},
      function /* foo */ test7(/* baz */) {},
      /* fum */ function /* foo */ // blah
      test8(/* baz */ a) {},
    ];
    const expected = values.map(() => true);
    const actual = values.map(isFunction);
    expect(actual).toEqual(expected);
  });

  itHasFat('should return `true` for arrow functions', () => {
    const fat = new Function('return (x, y) => {return this;};')();
    expect(isFunction(fat)).toBe(true);
  });

  itHasGen('should return `true` for generator functions', () => {
    const gen = new Function('return function* idMaker(x, y){};')();
    expect(isFunction(gen)).toBe(true);
  });

  itHasAsync('should return `true` for async functions', () => {
    const asy = new Function('return async function idAsync(x, y){};')();
    expect(isFunction(asy)).toBe(true);
  });

  itHasClass('should return `false` for classes', () => {
    const classes = new Function('"use strict"; return class My {};')();
    expect(isFunction(classes)).toBe(false);
  });

  itHasClass('should return `true` for classes if allowClass is truthy', () => {
    const classes = new Function('"use strict"; return class My {};')();
    expect(isFunction(classes, true)).toBe(true);
  });
});
